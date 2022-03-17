/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';

type Size = 'small' | 'medium' | 'large';
type Orientation = 'portrait' | 'landscape';

const setInitSize = (): Size => {
  const currentWidth: number = window.innerWidth;

  if (currentWidth >= 1024) return 'large';
  if (currentWidth >= 768) return 'medium';
  return 'small';
};

const setInitOrientation = (): Orientation => {
  const currentOrientation: string = window.screen.orientation.type;

  return currentOrientation.includes('portrait') ? 'portrait' : 'landscape';
};

const useResponsive = () => {
  const [size, setSize] = useState<Size>(setInitSize());
  const [orientation, setOrientation] = useState<Orientation>(setInitOrientation());

  const setNewSize = () => setSize(setInitSize());
  const setNewOrientation = () => setOrientation(setInitOrientation());

  window.addEventListener('resize', setNewSize);
  window.addEventListener('orientationchange', setNewOrientation);

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', setNewSize);
      window.removeEventListener('orientationchange', setNewOrientation);
    };
  }, []);

  return {
    size,
    orientation
  };
};

export default useResponsive;
