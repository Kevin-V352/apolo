import { useEffect, useState, useContext } from 'react';

import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import { SearchContext } from '../../contexts/authContext/SearchContext';
import useDebounced from '../../hooks/useDebounced';
import * as S from './SearchBarElements';

const SearchBar = () => {
  const [textValue, setTextValue] = useState<string>('');

  const { searching, setSearching } = useContext(SearchContext);

  const { secondaryColor } = useTheme();

  const navigate = useNavigate();

  const debouncedValue = useDebounced(textValue);

  useEffect(() => {
    if (debouncedValue.length !== 0) {
      navigate(`search/${debouncedValue}/1`);
      setSearching(true);
    };
  }, [debouncedValue]);

  return (
    <S.Container>
      <S.Input
        onChange={({ target: { value } }) => setTextValue(value)}
        autoCorrect="false"
        data-testid="searchInput"
      />
      {
        searching
          ? (
            <ScaleLoader
              height="3vh"
              width="0.3vh"
              color={secondaryColor}
            />
          )
          : (
            <RiSearchLine
              size="5vh"
              color={secondaryColor}
              width="10vh"
            />
          )
      }
    </S.Container>
  );
};

export default SearchBar;
