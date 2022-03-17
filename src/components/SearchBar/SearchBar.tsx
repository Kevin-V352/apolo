import { useEffect, useState, useContext, useRef } from 'react';

import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import { SearchContext } from '../../contexts/authContext/SearchContext';
import useDebounced from '../../hooks/useDebounced';
import * as S from './SearchBarElements';

const onEnter = (e: any) => {
  if (e.key === 'Enter') {
    e.target.blur();
  }
};

const SearchBar = () => {
  const [textValue, setTextValue] = useState<string>('');

  const { searching, setSearching } = useContext(SearchContext);

  const previousSearch = useRef<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const { secondaryColor } = useTheme();

  const navigate = useNavigate();

  const debouncedValue = useDebounced(textValue);

  const sizeIcon = '3rem';

  useEffect(() => {
    const formattedQuery = encodeURIComponent(debouncedValue.toLowerCase());

    if (
      debouncedValue.length !== 0
      && formattedQuery !== previousSearch.current
    ) {
      previousSearch.current = formattedQuery;
      navigate(`search/${formattedQuery}/1`);
      setSearching(true);
    };
  }, [debouncedValue]);

  return (
    <S.Container
      sizeIcons={sizeIcon}
    >
      <S.Input
        onChange={({ target: { value } }) => setTextValue(value)}
        autoCorrect="false"
        data-testid="searchInput"
        type="text"
        onKeyUp={onEnter}
        ref={inputRef}
      />
      {
        searching
          ? (
            <BounceLoader
              size={sizeIcon}
              color={secondaryColor}
            />
          )
          : (
            <RiSearchLine
              size="100%"
              color={secondaryColor}
            />
          )
      }
    </S.Container>
  );
};

export default SearchBar;
