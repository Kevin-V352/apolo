/* eslint-disable no-nested-ternary */
import { useEffect, useRef, useState } from 'react';

interface useGhostContentState {
  ghostElements: number[];
  emptySpace: boolean;
};

const useGhostContent = (numberOfElements: number) => {
  const [state, setState] = useState<useGhostContentState>({
    ghostElements: [],
    emptySpace: false
  });

  const timeOutId = useRef<NodeJS.Timeout>();
  const numberOfElementsRef = useRef<number>(0);

  const action = () => {
    const screenWidth = window.innerWidth;
    const minWidth = (screenWidth >= 1024) ? 240 : (screenWidth >= 768) ? 200 : 145;
    const padding = (screenWidth >= 1024) ? 80 : 20;
    const usableWidth = (screenWidth - padding);
    let numberOfColumns = Math.floor(usableWidth / minWidth);
    const remainingWidth = ((usableWidth - ((numberOfColumns - 1) * 10)) - (numberOfColumns * minWidth));
    const emptySpace = !(numberOfElementsRef.current >= numberOfColumns);

    if (remainingWidth < 0) numberOfColumns -= 1;

    const ghostElements = (numberOfColumns - numberOfElementsRef.current);

    setState({
      ghostElements: (ghostElements < 0) ? [] : Array.from(Array(ghostElements).keys()),
      emptySpace
    });
  };

  const actionWithLastResize = () => {
    if (timeOutId.current) clearTimeout(timeOutId.current);

    timeOutId.current = setTimeout(() => action(), 200);
  };

  useEffect(() => {
    window.addEventListener('resize', actionWithLastResize);
    action();

    return () => {
      window.removeEventListener('resize', actionWithLastResize);
    };
  }, []);

  useEffect(() => {
    numberOfElementsRef.current = numberOfElements;
  }, [numberOfElements]);

  return { ...state };
};

export default useGhostContent;
