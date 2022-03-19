import { useState, useEffect, useContext } from 'react';

import { spotifyAPI } from '../api/spotifyAPI';
import { SearchContext } from '../contexts/authContext/SearchContext';
import { errorHandler } from '../helpers/errorHandlers';
import { TracksPaginatedResponse, TrackResponse } from '../interfaces/trackInterfaces';

interface useResultListState {
  tracks: TrackResponse[];
  nextPage: boolean;
  status: 'pending' | 'finalized',
  error: null | string
};

const useResultList = (searchTerm: string, pageNumber: number) => {
  const [state, setState] = useState<useResultListState>({
    tracks: [],
    nextPage: false,
    status: 'pending',
    error: null
  });

  const { setSearchStatus } = useContext(SearchContext);

  const getTrackList = async () => {
    try {
      const { data: { tracks: { items, next } } } = await spotifyAPI
        .get<TracksPaginatedResponse>('/search', {
          params: {
            query: searchTerm,
            limit: '30',
            type: 'track',
            offset: ((pageNumber - 1) * 30)
          }
        });

      setState({
        ...state,
        tracks: items,
        nextPage: !!next,
        status: 'finalized'
      });

      setSearchStatus((searchStatus) => ({ ...searchStatus, searching: false }));
    } catch (error) {
      setState({
        ...state,
        error: errorHandler(error)
      });
    };
  };

  useEffect(() => {
    getTrackList();
  }, [searchTerm, pageNumber]);

  return { ...state };
};

export default useResultList;
