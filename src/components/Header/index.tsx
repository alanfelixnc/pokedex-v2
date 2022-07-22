import React from 'react';
import logo from 'assets/images/logo.png';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Search from 'components/Search';

const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.md};
`;

const Logo = styled.img`
  height: ${({ theme }) => theme.size.medium};
  margin-left: ${({ theme }) => theme.spacing.lg};
`;

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <HeaderWrapper>
          <Logo src={logo} alt="PokéDex logo" />
        </HeaderWrapper>
        <Search />
      </header>
    </ThemeProvider>
  );
}
