import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Routes from 'routes';
import { FavoritesProvider, SearchProvider } from 'contexts';
import { useState } from 'react';
import { FavoritesType, SearchType } from 'types';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function App() {
  const [search, setSearch] = useState<SearchType>('');
  const [favorites, setFavorites] = useState<FavoritesType>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  return (
    <SearchProvider
      value={{
        search,
        setSearch,
      }}
    >
      <FavoritesProvider
        value={{
          favorites,
          setFavorites,
          showFavorites,
          setShowFavorites,
        }}
      >
        <ThemeProvider theme={theme}>
          <Header />
          <Routes />
          <Footer />
        </ThemeProvider>
      </FavoritesProvider>
    </SearchProvider>
  );
}

export default App;
