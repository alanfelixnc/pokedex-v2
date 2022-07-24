import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { FooterWrapper, Text } from './style';

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <footer>
        <FooterWrapper>
          <Text>PokéDex @ 2022</Text>
        </FooterWrapper>
      </footer>
    </ThemeProvider>
  );
}
