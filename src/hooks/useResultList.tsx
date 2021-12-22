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

  const { setSearching } = useContext(SearchContext);

  const getTrackList = async () => {
    try {
      const formatedQuery: string = (searchTerm).replace(/%20/g, '+');

      const { data: { tracks: { items, next } } } = await spotifyAPI
        .get<TracksPaginatedResponse>('/search', {
          params: {
            query: formatedQuery,
            limit: '20',
            type: 'track',
            offset: ((pageNumber - 1) * 20)
          }
        });

      setState({
        ...state,
        tracks: items,
        nextPage: !!next,
        status: 'finalized'
      });

      setSearching(false);
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
