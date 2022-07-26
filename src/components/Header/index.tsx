import React, { useContext } from 'react';
import logo from 'assets/images/logo.png';
import { HeaderWrapper, Logo, NavButton } from './style';
import { FavoritesContext } from 'contexts';

export default function Header() {
  const { showFavorites, setShowFavorites } = useContext(FavoritesContext);

  return (
    <header>
      <HeaderWrapper>
        <Logo src={logo} alt="PokéDex logo" />
        <NavButton onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? 'Show all' : 'Show favorites'}
        </NavButton>
      </HeaderWrapper>
    </header>
  );
}
