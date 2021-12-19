/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
import { useState, useRef, useEffect, useCallback } from 'react';

interface PlayerState {
  percentage: number;
  status:
  | 'pending'
  | 'playing'
  | 'paused'
  | 'rebooted'
};

const usePlayer = (audioUrl: string | null) => {
  const [state, setState] = useState<PlayerState>({
    percentage: 0,
    status: 'pending'
  });

  const audioRef = useRef<HTMLAudioElement>();
  const statusRef = useRef<string>('pending');

  const updateTime = useCallback(() => {
    const { currentTime } = audioRef.current!;
    const timePercentage = Math.round((currentTime * 100) / 30);
    setState((state) => ({ ...state, percentage: timePercentage }));
  }, []);

  const control = useCallback((action: 'play' | 'pause' | 'reset') => {
    switch (action) {
      case 'play':
        audioRef.current!.play();
        if (statusRef.current === 'playing') break;

        setState((state) => ({ ...state, status: 'playing' }));
        break;

      case 'pause':
        audioRef.current!.pause();
        if (statusRef.current !== 'playing') break;

        setState((state) => ({ ...state, status: 'paused' }));
        break;

      case 'reset':
        audioRef.current!.pause();
        audioRef.current!.currentTime = 0;
        if (statusRef.current === 'pending') break;

        setState((state) => ({ ...state, status: 'rebooted' }));
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
