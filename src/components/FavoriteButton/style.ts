import styled from 'styled-components';

type ButtonProps = {
  active: boolean;
};

export const Button = styled.button<ButtonProps>`
  position: absolute;
  right: 0;
  margin: 0 16px;
  background-color: ${({ active, theme }) =>
    active ? theme.color.primary.light : 'transparent'};
  color: ${({ active, theme }) =>
    active ? theme.color.primary.dark : theme.color.primary.light};
  font-size: ${({ theme }) => theme.font.size.title1};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  border: none;
  cursor: pointer;
  transition: ease-in 0.1s;
  :hover {
    background-color: ${({ theme }) => theme.color.accent.default};
    color: ${({ theme }) => theme.color.primary.default};
  }
  :active {
    background-color: ${({ theme }) => theme.color.accent.dark};
  }
`;
