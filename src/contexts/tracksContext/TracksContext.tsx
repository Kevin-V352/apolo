/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable camelcase */

import { createContext, FC, useEffect, useRef, useState } from 'react';

import axios, { AxiosRequestConfig } from 'axios';

import { spotifyAuthAPI, spotifyAPI } from '../../api/spotifyAPI';
import testTracksIdentifiers from '../../data/testTracksIdentifiers';
import { TrackResponse, TracksPaginatedResponse } from '../../interfaces/trackInterfaces';

type TracksContextProps = {
  testTracks: TrackResponse[];
  tracks: TrackResponse[] | null;
  searching: boolean;
  pageData: PageUrls;
  getTrackList: (query: string) => void;
  changePage: (nextPage: string | null) => void;
};

type PageUrls = {
  next: null | string;
  previous: null | string;
  current: number;
};

export const TracksContext = createContext({} as TracksContextProps);

export const TracksProvider: FC = ({ children }) => {
  const token = useRef<string>('');
  const pageData = useRef<PageUrls>({
    next: '',
    previous: '',
    current: 1
  });

  const [tracks, setTracks] = useState<TrackResponse[] | null>(null);
  const [testTracks, setTestTracks] = useState<TrackResponse[]>([]);
  const [searching, setSearching] = useState(false);

  const requestConfiguration: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token.current}` },
    method: 'GET'
  };

  const getToken = async () => {
    try {
      const { data: { access_token } } = await spotifyAuthAPI;
      token.current = access_token;
      console.log('me ejecuto', access_token);
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

    try {
      const formatedQuery: string = encodeURI(query).replace(/%20/g, '+');

      const { data: { tracks: { items, next, previous } } } = await spotifyAPI
        .get<TracksPaginatedResponse>('/search', {
          ...requestConfiguration,
          params: {
            query: formatedQuery,
            type: 'track',
            offset: 0,
            limit: 20
          }
        });

      pageData.current = { next, previous, current: 1 };
      setTracks(items);
      setSearching(false);
    } catch (error) {
      console.log(error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////

  const changePage = async (nextPage: string | null) => {
    if (!nextPage) return;

    const { data: { tracks: { items, next, previous, offset } } } = await axios
      .get<TracksPaginatedResponse>(nextPage, requestConfiguration);

    pageData.current = {
      next,
      previous,
      current: ((offset / 20) + 1)
    };

    setTracks(items);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TracksContext.Provider value={{
      tracks,
      testTracks,
      searching,
      pageData: pageData.current,
      getTrackList,
      changePage
    }}
    >
      {children}
    </TracksContext.Provider>
  );
};
