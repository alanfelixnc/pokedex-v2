import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primary.default};
  padding: 16px;
  border-radius: 16px;
  margin: 24px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 8px;
    margin: 0 0 16px 0;
    border-radius: 0;
    text-align: center;
  }
`;

export const Logo = styled.img`
  height: 64px;
  margin-left: 32px;

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;
