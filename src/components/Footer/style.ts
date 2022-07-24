import styled from 'styled-components';

export const FooterWrapper = styled.div`
  text-align: center;
  margin: 32px;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.text.onPrimary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 1.12rem;
`;
