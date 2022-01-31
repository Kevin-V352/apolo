/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
import { useState, useRef, useEffect, useCallback } from 'react';

interface PlayerState {
  percentage: number;
  status:
  | 'pending'
  | 'playing'
  | 'paused'
};

const usePlayer = (audioUrl: string | null) => {
  const [state, setState] = useState<PlayerState>({
    percentage: 0,
    status: 'pending'
  });

  const audioRef = useRef<HTMLAudioElement>();
  const statusRef = useRef<string>('pending');

  // TODO: Review implementation
  const updateTime = useCallback(() => {
    const { currentTime } = audioRef.current!;
    const timePercentage = Math.round((currentTime * 100) / 30);
    setState((state) => ({ ...state, percentage: timePercentage }));
  }, []);

  const control = useCallback(async (action: 'play' | 'pause' | 'reset') => {
    switch (action) {
      case 'play':
        await audioRef.current!.play();
        if (statusRef.current === 'playing') break;

        setState((state) => ({ ...state, status: 'playing' }));
        break;

      case 'pause':
        audioRef.current!.pause();
        if (statusRef.current !== 'playing') break;

        setState((state) => ({ ...state, status: 'paused' }));
        break;

      case 'reset':
        audioRef.current!.currentTime = 0;
        break;

      default:
        break;
    };
  }, []);

  useEffect(() => {
    if (audioUrl !== null && audioUrl !== 'pending') {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.addEventListener('timeupdate', updateTime);
      audioRef.current.onended = (e: any) => {
        e.target.currentTime = 0;
        setState({ ...state, status: 'pending' });
      };
    };
  }, [audioUrl]);

  useEffect(() => {
    statusRef.current = state.status;
  }, [state]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  return {
    ...state,
    control
  };
};

export default usePlayer;
