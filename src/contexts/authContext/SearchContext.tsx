/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, FC, useState } from 'react';

interface SearchContextState {
  searching: boolean;
  openKeyboard: boolean;
};

interface SearchContextProps {
  searchStatus: SearchContextState;
  setSearchStatus: React.Dispatch<React.SetStateAction<SearchContextState>>
};

export const SearchContext = createContext({} as SearchContextProps);

export const SearchProvider: FC = ({ children }) => {
  const [searchStatus, setSearchStatus] = useState<SearchContextState>({
    searching: false,
    openKeyboard: false
  });

  return (
    <SearchContext.Provider value={{
      searchStatus,
      setSearchStatus
    }}
    >
      {children}
    </SearchContext.Provider>
  );
};
