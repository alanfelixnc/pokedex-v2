import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primary.default};
  padding: 16px;
  border-radius: 16px;
  margin: 24px;
`;

export const Logo = styled.img`
  height: 64px;
  margin-left: 32px;
`;
