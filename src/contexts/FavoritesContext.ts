import React from 'react';
import { FavoritesContextProps } from 'types';

const DEFAULT_VALUE: FavoritesContextProps = {
  favorites: [],
  setFavorites: () => null,
};

export const FavoritesContext = React.createContext(DEFAULT_VALUE);

export const FavoritesProvider = FavoritesContext.Provider;
