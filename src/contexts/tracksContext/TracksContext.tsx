/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable camelcase */

import { createContext, FC, useEffect, useRef, useState } from 'react';

import { AxiosRequestConfig } from 'axios';

import { spotifyAuthAPI, spotifyAPI } from '../../api/spotifyAPI';
import testTracksIdentifiers from '../../data/testTracksIdentifiers';
import { TrackResponse, TracksPaginatedResponse } from '../../interfaces/trackInterfaces';

type TracksContextProps = {
  tracks: TrackResponse[];
  testTracks: TrackResponse[];
  getTrackList: (query: string) => void;
  searching: boolean;
};

export const TracksContext = createContext({} as TracksContextProps);

export const TracksProvider: FC = ({ children }) => {
  const token = useRef<string>('');

  const [tracks, setTracks] = useState<TrackResponse[]>([]);
  const [testTracks, setTestTracks] = useState<TrackResponse[]>([]);
  const [searching, setSearching] = useState(false);

  // eslint-disable-next-line object-curly-newline
  const requestConfiguration: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token.current}` },
    method: 'GET'
  };

  const getToken = async () => {
    try {
      const { data: { access_token } } = await spotifyAuthAPI;
      token.current = access_token;
      getTestTracks();
    } catch (error) {
      console.log(error);
    };
  };

  ///////////////////////////////////////////////////////////////////////////

  const getTestTracks = async () => {
    try {
      const promisesTestTracks = testTracksIdentifiers.map((id) => (
        spotifyAPI.get<TrackResponse>(`/tracks/${id}`, requestConfiguration)
      ));
      const responseTestTracks = await Promise.all(promisesTestTracks);

      setTestTracks(responseTestTracks.map(({ data }) => data));
    } catch (error) {
      console.log(error);
    };
  };

  ///////////////////////////////////////////////////////////////////////////

  const getTrackList = async (query: string) => {
    setSearching(true);

    if (query.length === 0) {
      setTracks([]);
      return;
    };

    try {
      const formatedQuery: string = encodeURI(query).replace(/%20/g, '+');

      const { data: { tracks: { items } } } = await spotifyAPI
        // eslint-disable-next-line max-len
        .get<TracksPaginatedResponse>('/search', {
          ...requestConfiguration,
          params: {
            query: formatedQuery,
            type: 'track',
            offset: 0,
            limit: 20
          }
        });

      setTracks(items);
      setSearching(false);
    } catch (error) {
      console.log(error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getToken();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TracksContext.Provider value={{
      tracks,
      testTracks,
      searching,
      getTrackList
    }}
    >
      {children}
    </TracksContext.Provider>
  );
};
