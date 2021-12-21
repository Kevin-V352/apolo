import { useEffect, useState } from 'react';

import { spotifyAPI } from '../api/spotifyAPI';
import testTracksIdentifiers from '../data/testTracksIdentifiers';
import { TrackResponse } from '../interfaces/trackInterfaces';

const useDefaultList = () => {
  const [state, setState] = useState<TrackResponse[]>([]);

  const getTestTracks = async () => {
    try {
      const promisesTestTracks = testTracksIdentifiers.map((id) => (
        spotifyAPI.get<TrackResponse>(`/tracks/${id}`)
      ));
      const responseTestTracks = await Promise.all(promisesTestTracks);

      setState(responseTestTracks.map(({ data }) => data));
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getTestTracks();
  }, []);

  return state;
};

export default useDefaultList;
