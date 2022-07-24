import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin: 24px 24px 64px 24px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.text.onSecondary};
  background-color: ${({ theme }) => theme.color.accent.default};
  border: none;
  margin: 4px;
  padding: 8px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.font.size.title3};
  cursor: pointer;
  transition: ease-in 0.1;
  :hover {
    background-color: ${({ theme }) => theme.color.accent.light};
  }
  :active {
    background-color: ${({ theme }) => theme.color.accent.dark};
  }
  :disabled {
    background-color: ${({ theme }) => theme.color.secondary.default};
    cursor: not-allowed;
  }
`;

export const Input = styled.span`
  color: ${({ theme }) => theme.color.text.onPrimary};
  margin: 8px;
  font-size: ${({ theme }) => theme.font.size.title1};
`;
