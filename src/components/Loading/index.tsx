import React from 'react';
import { FiLoader } from 'react-icons/fi';
import { LoadingWrapper, Spin, Text } from './style';

export default function Loading() {
  return (
    <LoadingWrapper>
      <Spin>
        <FiLoader />
      </Spin>
      <Text>Loading...</Text>
    </LoadingWrapper>
  );
}
