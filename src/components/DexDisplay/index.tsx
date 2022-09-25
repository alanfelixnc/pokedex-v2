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
import FavoriteButton from 'components/FavoriteButton';
import { FavoritesType } from 'types';

type DexDisplayProps = {
  pokemonList: Pokemon[];
  favoritedPokemon: FavoritesType;
  setFavoritedPokemon: (favorites: FavoritesType) => void;
};

export default function DexDisplay({
  pokemonList,
  favoritedPokemon,
  setFavoritedPokemon,
}: DexDisplayProps) {
  let updatedFavoritedPokemon: FavoritesType = [];
  function toggleFavoritedPokemon(id: number) {
    if (favoritedPokemon.includes(id)) {
      updatedFavoritedPokemon = favoritedPokemon.filter(
        (favoritedId) => favoritedId !== id
      );
    } else {
      updatedFavoritedPokemon = [...favoritedPokemon, id];
    }
    setFavoritedPokemon(updatedFavoritedPokemon);
  }

  return (
    <ThemeProvider theme={theme}>
      <DexWrapper>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id}>
            <FavoriteButton
              active={favoritedPokemon.includes(pokemon.id)}
              onClick={() => toggleFavoritedPokemon(pokemon.id)}
            />
            <InfoWrapper>
              <Name>{pokemon.species.name}</Name>
              <DexNumber>{`#${pokemon.id}`}</DexNumber>
            </InfoWrapper>
            <Sprite
              alt={pokemon.species.name}
              src={
                pokemon.sprites.other['official-artwork'].front_default ||
                undefined
              }
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
