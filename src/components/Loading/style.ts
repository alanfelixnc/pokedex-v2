import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 72px;
`;

export const Spin = styled.div`
  color: ${({ theme }) => theme.color.text.onPrimary};
  font-size: 72px;
  width: 76px;
  height: 76px;
  margin: 0 auto;
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.text.onPrimary};
  font-size: ${({ theme }) => theme.font.size.title3};
`;
