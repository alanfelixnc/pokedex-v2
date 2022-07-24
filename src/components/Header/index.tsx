import React from 'react';
import logo from 'assets/images/logo.png';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { HeaderWrapper, Logo } from './style';

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <HeaderWrapper>
          <Logo src={logo} alt="PokéDex logo" />
        </HeaderWrapper>
      </header>
    </ThemeProvider>
  );
}
