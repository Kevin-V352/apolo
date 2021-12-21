import { useState, useEffect, useContext } from 'react';

import { spotifyAPI } from '../api/spotifyAPI';
import { SearchContext } from '../contexts/authContext/SearchContext';
import { TracksPaginatedResponse, TrackResponse } from '../interfaces/trackInterfaces';

interface useResultListState {
  tracks: TrackResponse[];
  nextPage: boolean;
  status: 'pending' | 'finalized'
};

const useResultList = (searchTerm: string, pageNumber: number) => {
  const [state, setState] = useState<useResultListState>({
    tracks: [],
    nextPage: false,
    status: 'pending'
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
        tracks: items,
        nextPage: !!next,
        status: 'finalized'
      });

      setSearching(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrackList();
  }, [searchTerm, pageNumber]);

  return { ...state };
};

export default useResultList;
