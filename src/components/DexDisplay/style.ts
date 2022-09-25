import styled from 'styled-components';

export const DexWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 24px;
  margin: 24px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const PokemonCard = styled.div`
  position: relative;
  text-align: center;
  background-color: ${({ theme }) => theme.color.secondary.dark};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: ease-in 0.1s;
  :hover {
    background-color: ${({ theme }) => theme.color.secondary.default};
  }

  @media only screen and (max-width: 768px) {
    background-color: ${({ theme }) => theme.color.secondary.default};
    border-radius: 32px;
  }
`;

export const Sprite = styled.img`
  margin: 16px;
  width: 200px;
  height: 200px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.color.text.onPrimary};
`;

export const Name = styled(Info)`
  font-size: ${({ theme }) => theme.font.size.title2};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: capitalize;
`;

export const DexNumber = styled(Info)`
  font-size: ${({ theme }) => theme.font.size.caption};
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin-left: 8px;
`;

export const TypesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
