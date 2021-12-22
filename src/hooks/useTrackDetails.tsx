/* eslint-disable camelcase */
import { useState, useEffect } from 'react';

import lyricsOvhAPI from '../api/lyricsOvhAPI';
import { spotifyAPI } from '../api/spotifyAPI';
import { errorHandler } from '../helpers/errorHandlers';
import { dateFormat, letterSeparator, orderArtists, trackDuration } from '../helpers/formatters';
import { LyricsResponse } from '../interfaces/lyricsInterfaces';
import { TrackResponse } from '../interfaces/trackInterfaces';

interface TrackDetailsState {
  title: string;
  album: string;
  image: string;
  artists: string;
  releaseDate: string;
  duration: string;
  audioUrl: string | null | 'pending',
  lyrics: string | null;
  loading: boolean;
  error: null | string;
};

const useTrackDetails = (trackId: string) => {
  const [state, setState] = useState<TrackDetailsState>({
    title: '',
    album: '',
    image: '',
    artists: '',
    releaseDate: '',
    duration: '',
    audioUrl: 'pending',
    lyrics: 'pending',
    loading: true,
    error: null
  });

  const getTrackLyrics = async (artist: string, name: string): Promise<string | null> => {
    try {
      const { data: { lyrics } } = await lyricsOvhAPI
        .get<LyricsResponse>(`${encodeURI(artist)}/${encodeURI(name)}`);
      return lyrics!;
    } catch (error) {
      return null;
    }
  };

  const getTrackData = async () => {
    try {
      const { data } = await spotifyAPI
        .get<TrackResponse>(`/tracks/${trackId}`);
      return [data, null];
    } catch (error) {
      return [null, error];
    };
  };

  const getTrackDetails = async () => {
    const [data, trackDataError] = await getTrackData();

    if (trackDataError) {
      setState({
        ...state,
        error: errorHandler(trackDataError)
      });
      return;
    };

    const {
      name,
      album,
      artists,
      duration_ms,
      preview_url
    } = data as TrackResponse;

    const lyrics = await getTrackLyrics(artists[0].name, name);

    setState({
      ...state,
      title: name,
      album: album.name,
      image: album.images[0].url,
      artists: orderArtists(artists),
      releaseDate: dateFormat(album.release_date),
      duration: trackDuration(duration_ms),
      audioUrl: preview_url,
      lyrics: letterSeparator(lyrics, name, orderArtists(artists)),
      loading: false
    });
  };

  useEffect(() => {
    getTrackDetails();
  }, []);

  return {
    ...state,
    getTrackDetails
  };
};

export default useTrackDetails;
