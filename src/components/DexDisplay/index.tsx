import React from 'react';
import { Pokemon } from 'pokenode-ts';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import {
  DexNumber,
  DexWrapper,
  InfoWrapper,
  Name,
  PokemonCard,
  Sprite,
  TypesWrapper,
} from './style';
import Tag from 'components/TypeTag';

type DexDisplayProps = {
  pokemonList: Pokemon[];
};

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
            <TypesWrapper>
              {pokemon.types.map((type) => (
                <Tag badge key={type.slot} type={type.type.name}>
                  {type.type.name}
                </Tag>
              ))}
            </TypesWrapper>
          </PokemonCard>
        ))}
      </DexWrapper>
    </ThemeProvider>
  );
}
