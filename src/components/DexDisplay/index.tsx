import React from 'react';
import { Pokemon } from 'pokenode-ts';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

type DexDisplayProps = {
  pokemonList: Pokemon[];
};

const DexWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 64px;
  margin: 64px;
`;

const PokemonCard = styled.div`
  text-align: center;
`;

const Sprite = styled.img`
  margin: 16px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.color.text.onPrimary};
`;

const Name = styled(Info)`
  font-size: ${({ theme }) => theme.font.size.title2};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const DexNumber = styled(Info)`
  font-size: ${({ theme }) => theme.font.size.caption};
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin-left: 8px;
`;

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Type = styled(Info)`
  margin: 0 8px;
`;

export default function DexDisplay({ pokemonList }: DexDisplayProps) {
  return (
    <ThemeProvider theme={theme}>
      <DexWrapper>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id}>
            <InfoWrapper>
              <Name>{pokemon.species.name}</Name>
              <DexNumber>{`#${pokemon.id}`}</DexNumber>
            </InfoWrapper>
            <Sprite
              alt={pokemon.species.name}
              src={pokemon.sprites.front_default || undefined}
            />
            <TypeWrapper>
              {pokemon.types.map((type) => (
                <Type key={type.slot}>{type.type.name}</Type>
              ))}
            </TypeWrapper>
          </PokemonCard>
        ))}
      </DexWrapper>
    </ThemeProvider>
  );
}
