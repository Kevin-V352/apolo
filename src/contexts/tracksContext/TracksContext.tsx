/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable camelcase */

import { createContext, FC, useEffect, useRef, useState } from 'react';

import axios, { AxiosRequestConfig } from 'axios';

import { spotifyAuthAPI, spotifyAPI } from '../../api/spotifyAPI';
import testTracksIdentifiers from '../../data/testTracksIdentifiers';
import { TrackResponse, TracksPaginatedResponse } from '../../interfaces/trackInterfaces';

interface TracksContextProps {
  testTracks: TrackResponse[];
  tracks: TrackResponse[] | null;
  searching: boolean;
  pageData: PageUrls;
  requestConfiguration: AxiosRequestConfig;
  getTrackList: (query: string) => void;
  changePage: (nextPage: string | null) => void;
};

interface ContextState {
  tracks: TrackResponse[] | null;
  testTracks: TrackResponse[];
  searching: boolean;
};

interface PageUrls {
  next: null | string;
  previous: null | string;
  current: number;
};

export const TracksContext = createContext({} as TracksContextProps);

export const TracksProvider: FC = ({ children }) => {
  const requestConfiguration = useRef<AxiosRequestConfig>({});
  const pageData = useRef<PageUrls>({
    next: '',
    previous: '',
    current: 1
  });

  const [state, setState] = useState<ContextState>({
    tracks: null,
    testTracks: [],
    searching: false
  });

  const getToken = async () => {
    try {
      const { data: { access_token } } = await spotifyAuthAPI;

      requestConfiguration.current = {
        headers: { Authorization: `Bearer ${access_token}` },
        method: 'GET'
      };

      getTestTracks();
    } catch (error) {
      console.log(error);
    };
  };

  ///////////////////////////////////////////////////////////////////////////

  const getTestTracks = async () => {
    try {
      const promisesTestTracks = testTracksIdentifiers.map((id) => (
        spotifyAPI.get<TrackResponse>(`/tracks/${id}`, requestConfiguration.current)
      ));
      const responseTestTracks = await Promise.all(promisesTestTracks);

      setState({ ...state, testTracks: responseTestTracks.map(({ data }) => data) });
    } catch (error) {
      console.log(error);
    };
  };

  ///////////////////////////////////////////////////////////////////////////

  const getTrackList = async (query: string) => {
    setState({ ...state, searching: true });

    try {
      const formatedQuery: string = encodeURI(query).replace(/%20/g, '+');

      const { data: { tracks: { items, next, previous } } } = await spotifyAPI
        .get<TracksPaginatedResponse>('/search', {
          ...requestConfiguration.current,
          params: {
            query: formatedQuery,
            type: 'track',
            offset: 0,
            limit: 20
          }
        });

      pageData.current = { next, previous, current: 1 };

      setState({
        ...state,
        tracks: items,
        searching: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////

  const changePage = async (nextPage: string | null) => {
    if (!nextPage) return;

    const { data: { tracks: { items, next, previous, offset } } } = await axios
      .get<TracksPaginatedResponse>(nextPage, requestConfiguration.current);

    pageData.current = {
      next,
      previous,
      current: ((offset / 20) + 1)
    };

    setState({ ...state, tracks: items });
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TracksContext.Provider value={{
      ...state,
      requestConfiguration: requestConfiguration.current,
      pageData: pageData.current,
      getTrackList,
      changePage
    }}
    >
      {children}
    </TracksContext.Provider>
  );
};
