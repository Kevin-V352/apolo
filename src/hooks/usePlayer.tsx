/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
import { useState, useRef, useEffect } from 'react';

import { secToMMSS } from '../helpers/formatters';

interface PlayerState {
  error: boolean,
  loading: boolean;
  trackPercentage: number;
  volumePercentage: number;
  duration: string;
  currentTime: string;
  muted: boolean;
  status:
  | 'pending'
  | 'playing'
  | 'paused'
};

const usePlayer = (
  audioUrl: string | null,
  title: string,
  artists: string,
  imageUrl: string | undefined
) => {
  const [state, setState] = useState<PlayerState>({
    error: false,
    loading: true,
    muted: false,
    trackPercentage: 0,
    volumePercentage: 100,
    duration: '',
    currentTime: '',
    status: 'pending'
  });

  const isMounted = useRef<boolean>(true);
  const audioRef = useRef<HTMLAudioElement>();

  const updateTime = () => {
    if (!audioRef.current || !isMounted.current) return;

    const { currentTime } = audioRef.current;
    const timePercentage = ((currentTime * 100) / 30);
    setState((state) => ({
      ...state,
      trackPercentage: timePercentage,
      currentTime: secToMMSS(currentTime)
    }));
  };

  const updateTimeManually = (position: string) => {
    if (!audioRef.current) return;

    const parsedPosition = parseInt(position, 10);
    const newTime = (((parsedPosition * 30) / 100));
    const timePercentage = ((newTime * 100) / 30);

    audioRef.current.currentTime = newTime;

    setState((state) => ({
      ...state,
      trackPercentage: timePercentage,
      currentTime: secToMMSS(newTime)
    }));
  };

  const updateVolume = (position: string) => {
    if (!audioRef.current) return;

    const parsedPosition = parseInt(position, 10);
    const newVolume = (parsedPosition / 100);
    const volumePercentage = (newVolume * 100);

    audioRef.current.volume = newVolume;

    setState((state) => ({ ...state, volumePercentage }));
  };

  const muteAudio = (muted: boolean) => {
    if (!audioRef.current) return;

    audioRef.current.muted = muted;
    setState((state) => ({ ...state, muted }));
  };

  const control = async (action: 'play' | 'pause' | 'reset') => {
    if (!audioRef.current) return;

    switch (action) {
      case 'play':
        await audioRef.current.play();
        setState((state) => ({ ...state, status: 'playing' }));
        break;

      case 'pause':
        audioRef.current.pause();
        setState((state) => ({ ...state, status: 'paused' }));
        break;

      case 'reset':
        audioRef.current.currentTime = 0;
        break;

      default:
        break;
    };
  };

  useEffect(() => {
    if (audioUrl !== null && audioUrl !== 'pending') {
      audioRef.current = new Audio(audioUrl);

      audioRef.current.onerror = () => {
        if (isMounted.current) setState({ ...state, error: true });
      };

      audioRef.current.onloadeddata = (e: any) => {
        const { currentTime, duration } = e.target;
        setState({
          ...state,
          loading: false,
          currentTime: secToMMSS(currentTime),
          duration: secToMMSS(duration)
        });
      };

      audioRef.current.addEventListener('timeupdate', updateTime);

      audioRef.current.onended = (e: any) => {
        e.target.currentTime = 0;
        setState((state) => ({ ...state, status: 'pending' }));
      };

      navigator.mediaSession.metadata = new MediaMetadata({
        title,
        artist: artists,
        artwork: [{ src: imageUrl!, sizes: '640x640', type: 'image/jpg' }]
      });
    };
  }, [audioUrl]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('timeupdate', updateTime);
        audioRef.current.src = '';
      }
    };
  }, []);

  return {
    ...state,
    control,
    updateTimeManually,
    updateVolume,
    muteAudio
  };
};

export default usePlayer;
