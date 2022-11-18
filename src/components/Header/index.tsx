import React, { useState } from 'react';
import logo from 'assets/images/logo.png';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { HeaderWrapper, Logo, NavButton } from './style';
import { FavoritesProvider } from 'contexts';

export default function Header() {
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <header>
        <HeaderWrapper>
          <FavoritesProvider
            value={{
              showFavorites,
            }}
          >
            <Logo src={logo} alt="PokéDex logo" />
            <NavButton onClick={() => setShowFavorites(!showFavorites)}>
              {showFavorites ? 'Show all' : 'Show favorites'}
            </NavButton>
          </FavoritesProvider>
        </HeaderWrapper>
      </header>
    </ThemeProvider>
  );
}
