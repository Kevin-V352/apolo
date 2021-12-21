/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, FC, useState } from 'react';

interface SearchContextProps {
  searching: boolean;
  setSearching: React.Dispatch<React.SetStateAction<boolean>>
};

export const SearchContext = createContext({} as SearchContextProps);

export const SearchProvider: FC = ({ children }) => {
  const [searching, setSearching] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{
      searching,
      setSearching
    }}
    >
      {children}
    </SearchContext.Provider>
  );
};
