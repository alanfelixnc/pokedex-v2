import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { SearchWrapper, Input, Button } from './style';

type SearchProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ setSearch }: SearchProps) {
  const [searchContent, setSearchContent] = useState('');

  function onSearch() {
    setSearch(searchContent.trim());
  }

  function onEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') onSearch();
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
        <Button onClick={() => onSearch()}>
          <FiSearch />
        </Button>
      </SearchWrapper>
    </ThemeProvider>
  );
}
