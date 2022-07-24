import React from 'react';
import logo from 'assets/images/logo.png';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primary.default};
  padding: 16px;
  border-radius: 16px;
  margin: 24px;
`;

const Logo = styled.img`
  height: 64px;
  margin-left: 32px;
`;

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
