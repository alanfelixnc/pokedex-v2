import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  width: 25%;
  min-width: 400px;
  border-radius: 32px;
  padding: 8px;
  margin: 0 auto;
`;

const Input = styled.input`
  border: none;
  width: 80%;
  min-width: 300px;
  font-size: ${({ theme }) => theme.font.size.title1};
  text-align: left;
  color: ${({ theme }) => theme.color.text.body.default};
  ::placeholder {
    color: ${({ theme }) => theme.color.text.body.light};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.secondary.light};
  color: ${({ theme }) => theme.color.text.body.default};
  font-size: ${({ theme }) => theme.font.size.title1};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  border: none;
  cursor: pointer;
  transition: ease-in 0.1s;
  :hover {
    background-color: ${({ theme }) => theme.color.secondary.default};
  }
  :active {
    background-color: ${({ theme }) => theme.color.secondary.dark};
  }
`;

type SearchProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ setSearch }: SearchProps) {
  const [searchContent, setSearchContent] = useState('');

  function onEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') setSearch(searchContent);
  }

  return (
    <ThemeProvider theme={theme}>
      <SearchWrapper>
        <Input
          name="search"
          placeholder="Search for a pokémon here"
          value={searchContent}
          onChange={(event) => setSearchContent(event.target.value)}
          onKeyPress={(event) => onEnter(event)}
        />
        <Button onClick={() => setSearch(searchContent)}>
          <FiSearch />
        </Button>
      </SearchWrapper>
    </ThemeProvider>
  );
}
