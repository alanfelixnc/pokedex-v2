import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primary.default};
  padding: 16px;
  border-radius: 16px;
  margin: 24px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;

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
`;

export const NavButton = styled.button`
  font-size: ${({ theme }) => theme.font.size.title1};
  background-color: ${({ theme }) => theme.color.primary.light};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text.onPrimary};
  transition: 0.1s ease-in;
  padding: 4px 8px;
  :hover {
    background-color: ${({ theme }) => theme.color.accent.default};
    color: ${({ theme }) => theme.color.text.onSecondary};
  }
  :active {
    background-color: ${({ theme }) => theme.color.accent.dark};
  }

  @media only screen and (max-width: 768px) {
    background-color: ${({ theme }) => theme.color.accent.default};
    color: ${({ theme }) => theme.color.text.onSecondary};
  }
`;
