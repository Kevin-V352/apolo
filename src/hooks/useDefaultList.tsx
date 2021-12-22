import { useEffect, useState } from 'react';

import { spotifyAPI } from '../api/spotifyAPI';
import testTracksIdentifiers from '../data/testTracksIdentifiers';
import { errorHandler } from '../helpers/errorHandlers';
import { TrackResponse } from '../interfaces/trackInterfaces';

interface useDefaultListState {
  defaultTracks: TrackResponse[];
  error: null | string;
};

const useDefaultList = () => {
  const [state, setState] = useState<useDefaultListState>({
    defaultTracks: [],
    error: null
  });

  const getDefaultTracks = async () => {
    try {
      const promisesTestTracks = testTracksIdentifiers.map((id) => (
        spotifyAPI.get<TrackResponse>(`/tracks/${id}`)
      ));
      const responseTestTracks = await Promise.all(promisesTestTracks);

      setState({
        ...state,
        defaultTracks: responseTestTracks.map(({ data }) => data)
      });
    } catch (error) {
      setState({
        ...state,
        error: errorHandler(error)
      });
    };
  };

  useEffect(() => {
    getDefaultTracks();
  }, []);

  return { ...state };
};

export default useDefaultList;
