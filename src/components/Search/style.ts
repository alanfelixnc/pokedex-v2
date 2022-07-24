import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  width: 25%;
  min-width: 400px;
  border-radius: 32px;
  padding: 8px;
  margin: 0 auto;
`;
export const Input = styled.input`
  border: none;
  width: 80%;
  min-width: 300px;
  font-size: ${({ theme }) => theme.font.size.title1};
  text-align: left;
  color: ${({ theme }) => theme.color.text.body.default};
  ::placeholder {
    color: ${({ theme }) => theme.color.text.body.light};
  }
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.secondary.light};
  color: ${({ theme }) => theme.color.text.body.default};
  font-size: ${({ theme }) => theme.font.size.title1};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  border: none;
  cursor: pointer;
  transition: ease-in 0.1s;
  :hover {
    background-color: ${({ theme }) => theme.color.secondary.default};
  }
  :active {
    background-color: ${({ theme }) => theme.color.secondary.dark};
  }
`;
