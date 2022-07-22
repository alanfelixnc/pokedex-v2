import React, { SetStateAction } from 'react';

type SearchType = string;

type SearchContextProps = {
  search: SearchType;
  setSearch: React.Dispatch<SetStateAction<SearchType>>;
};

const DEFAULT_VALUE: SearchContextProps = {
  search: '',
  setSearch: () => null,
};

export const SearchContext = React.createContext(DEFAULT_VALUE);

export const SearchProvider = SearchContext.Provider;
