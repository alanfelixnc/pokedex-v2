import React from 'react';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import {
  SearchWrapper,
  Input,
  Button,
  BackButton,
  InputWrapper,
} from './style';

type SearchProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showBackButton: boolean;
  onGoBack(): void;
};

export default function Search({
  setSearch,
  showBackButton,
  onGoBack,
}: SearchProps) {
  const [searchContent, setSearchContent] = useState('');

  function onSearch() {
    setSearch(searchContent.trim());
  }

  function onEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') onSearch();
  }

  return (
    <SearchWrapper>
      {showBackButton && (
        <BackButton onClick={() => onGoBack()}>
          <FiArrowLeft />
        </BackButton>
      )}
      <InputWrapper>
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
      </InputWrapper>
    </SearchWrapper>
  );
}
