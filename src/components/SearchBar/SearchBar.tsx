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
  };
};

const SearchBar = () => {
  const [textValue, setTextValue] = useState<string>('');

  const {
    searchStatus: { searching },
    setSearchStatus
  } = useContext(SearchContext);

  const previousSearch = useRef<string>('');

  const { secondaryColor } = useTheme();

  const navigate = useNavigate();

  const debouncedValue = useDebounced(textValue);

  const sizeIcon = '3rem';

  const controlAudioPlayerVisibility = (show: boolean) => {
    setSearchStatus((searchStatus) => ({ ...searchStatus, openKeyboard: show }));
  };

  useEffect(() => {
    const formattedQuery = (debouncedValue.replace(/[^A-Za-z0-9]/g, ' '));

    if (
      debouncedValue.length !== 0
      && formattedQuery !== previousSearch.current
    ) {
      previousSearch.current = formattedQuery;
      navigate(`search/${formattedQuery}/1`);
      setSearchStatus((searchStatus) => ({ ...searchStatus, searching: true }));
    };
  }, [debouncedValue]);

  return (
    <S.Container
      sizeIcons={sizeIcon}
    >
      <S.Input
        type="text"
        spellCheck="false"
        autoCorrect="false"
        data-testid="searchInput"
        onKeyUp={onEnter}
        onFocus={() => controlAudioPlayerVisibility(true)}
        onBlur={() => controlAudioPlayerVisibility(false)}
        onChange={({ target: { value } }) => setTextValue(value)}
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
