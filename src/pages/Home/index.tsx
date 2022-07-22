import { PokemonClient } from 'api';
import DexDisplay from 'components/DexDisplay';
import Search from 'components/Search';
import { SearchProvider } from 'contexts/SearchContext';
import React, { useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';

export default function Home() {
  const [search, setSearch] = useState('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  async function getPokemon() {
    const { results } = await PokemonClient.listPokemons(0, 20);
    const pokemonSpeciesList = await Promise.all(
      results.map((result) => {
        const pokemon = PokemonClient.getPokemonByName(result.name);
        return pokemon;
      })
    );
    setPokemonList(pokemonSpeciesList);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <SearchProvider
      value={{
        search,
        setSearch,
      }}
    >
      <Search setSearch={setSearch} />
      <DexDisplay pokemonList={pokemonList} />
    </SearchProvider>
  );
}
