import { PokemonClient } from 'api';
import DexDisplay from 'components/DexDisplay';
import Search from 'components/Search';
import { SearchProvider } from 'contexts/SearchContext';
import React, { useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import Pagination from 'components/Pagination';

const ITEMS_PER_PAGE = 30;

export default function Home() {
  const [search, setSearch] = useState('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);

  async function getPokemon(page: number) {
    const { results } = await PokemonClient.listPokemons(
      page,
      currentPage === totalPages
        ? totalResults % ITEMS_PER_PAGE
        : ITEMS_PER_PAGE
    );
    const pokemonSpeciesList = await Promise.all(
      results.map((result) => {
        const pokemon = PokemonClient.getPokemonByName(result.name);
        return pokemon;
      })
    );
    const { count } = await PokemonClient.listPokemonSpecies(0, 0);
    setTotalResults(count);
    setPokemonList(pokemonSpeciesList);
  }

  useEffect(() => {
    getPokemon(0);
  }, []);

  useEffect(() => {
    getPokemon((currentPage - 1) * ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <SearchProvider
      value={{
        search,
        setSearch,
      }}
    >
      <Search setSearch={setSearch} />
      <Pagination
        onNext={() => setCurrentPage(currentPage + 1)}
        onPrevious={() => setCurrentPage(currentPage - 1)}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <DexDisplay pokemonList={pokemonList} />
    </SearchProvider>
  );
}
