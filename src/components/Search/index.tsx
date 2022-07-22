import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { FiSearch } from 'react-icons/fi';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  width: 25%;
  min-width: 400px;
  border-radius: 32px;
  padding: ${({ theme }) => theme.spacing.xs};
  margin: 0 auto;
`;

const Input = styled.input`
  border: none;
  width: 80%;
  min-width: 300px;
  font-size: ${({ theme }) => theme.font.size.title1};
  text-align: left;
  color: ${({ theme }) => theme.color.text.bodyPrimary};
  ::placeholder {
    color: ${({ theme }) => theme.color.text.bodySecondary};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.secondaryLight};
  color: ${({ theme }) => theme.color.text.bodyPrimary};
  font-size: ${({ theme }) => theme.font.size.title1};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  border: none;
  cursor: pointer;
  transition: ease-in 0.1s;
  :hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }
  :active {
    background-color: ${({ theme }) => theme.color.secondaryDark};
  }
`;

export default function Search() {
  return (
    <ThemeProvider theme={theme}>
      <SearchWrapper>
        <Input name="search" placeholder="Search for a pokémon here" />
        <Button>
          <FiSearch />
        </Button>
      </SearchWrapper>
    </ThemeProvider>
  );
}