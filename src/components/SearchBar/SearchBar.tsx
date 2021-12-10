import { useContext, useEffect, useState } from 'react';

import { RiSearchLine } from 'react-icons/ri';
import { ScaleLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import { TracksContext } from '../../contexts/tracksContext/TracksContext';
import useDebounced from '../../hooks/useDebounced';
import * as S from './SearchBarElements';

const SearchBar = () => {
  const [textValue, setTextValue] = useState<string>('');

  const { getTrackList, searching } = useContext(TracksContext);

  const { secondaryColor } = useTheme();

  const debouncedValue = useDebounced(textValue);

  useEffect(() => {
    if (debouncedValue.length !== 0) {
      getTrackList(debouncedValue);
    };
  }, [debouncedValue]);

  return (
    <S.Container>
      <S.Input
        onChange={({ target: { value } }) => setTextValue(value)}
      />
      {
        !searching
          ? (
            <RiSearchLine
              size="5vh"
              color={secondaryColor}
              width="10vh"
            />
          )
          : (
            <ScaleLoader
              height="3vh"
              width="0.3vh"
              color={secondaryColor}
            />
          )
      }
    </S.Container>
  );
};

export default SearchBar;
