import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const FooterWrapper = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.lg};
`;

const Text = styled.span`
  color: ${({ theme }) => theme.color.text.onPrimary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 1.12rem;
`;

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
