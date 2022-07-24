import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { Button, Input, PaginationWrapper } from './style';

type PaginationProps = {
  onNext: () => void;
  onPrevious: () => void;
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  onNext,
  onPrevious,
  currentPage,
  totalPages,
}: PaginationProps) {
  return (
    <ThemeProvider theme={theme}>
      <PaginationWrapper>
        <Button disabled={currentPage <= 1} onClick={() => onPrevious()}>
          <FiChevronLeft />
        </Button>
        <Input>Page: {currentPage}</Input>
        <Button disabled={currentPage >= totalPages} onClick={() => onNext()}>
          <FiChevronRight />
        </Button>
      </PaginationWrapper>
    </ThemeProvider>
  );
}
