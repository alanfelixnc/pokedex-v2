import React from 'react';
import { FiLoader } from 'react-icons/fi';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { LoadingWrapper, Spin, Text } from './style';

export default function Loading() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingWrapper>
        <Spin>
          <FiLoader />
        </Spin>
        <Text>Loading...</Text>
      </LoadingWrapper>
    </ThemeProvider>
  );
}
