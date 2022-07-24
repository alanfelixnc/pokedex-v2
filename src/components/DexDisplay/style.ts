import styled from 'styled-components';

export const DexWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 64px;
  margin: 64px;
`;

export const PokemonCard = styled.div`
  text-align: center;
`;

export const Sprite = styled.img`
  margin: 16px;
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
`;

export const DexNumber = styled(Info)`
  font-size: ${({ theme }) => theme.font.size.caption};
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin-left: 8px;
`;

export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Type = styled(Info)`
  margin: 0 8px;
`;
