import React from 'react';
import { SearchContextProps } from 'types';

const DEFAULT_VALUE: SearchContextProps = {
  search: '',
  setSearch: () => null,
};

export const SearchContext = React.createContext(DEFAULT_VALUE);

export const SearchProvider = SearchContext.Provider;
