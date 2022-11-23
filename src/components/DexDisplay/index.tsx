import React from 'react';
import { Pokemon } from 'pokenode-ts';
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
  toggleFavoritedPokemon: (id: number) => void;
  selectPokemon: (id?: number) => void;
};

export default function DexDisplay({
  pokemonList,
  favoritedPokemon,
  toggleFavoritedPokemon,
  selectPokemon,
}: DexDisplayProps) {
  return (
    <DexWrapper>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} onClick={() => selectPokemon(pokemon.id)}>
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
  );
}
