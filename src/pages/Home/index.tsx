import { PokemonClient } from 'api';
import DexDisplay from 'components/DexDisplay';
import Search from 'components/Search';
import { SearchProvider } from 'contexts/SearchContext';
import React, { useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import Pagination from 'components/Pagination';
import Loading from 'components/Loading';

const ITEMS_PER_PAGE = 30;

export default function Home() {
  const [search, setSearch] = useState('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);

  function findOrGetPokemon() {
    const pagination = (currentPage - 1) * ITEMS_PER_PAGE;
    if (!search) getPokemon(pagination);
    else findPokemon(pagination, search);
  }

  async function findPokemon(pagination: number, search: string) {
    setLoading(true);
    const pokemonList: Array<{ name: string }> = [];
    let reachedMax = false;
    let searchPage = 0;
    await (async () => {
      while (!reachedMax) {
        const { results } = await PokemonClient.listPokemons(
          searchPage * 100,
          100
        );
        pokemonList.push(...results);
        searchPage = searchPage + 1;
        if (results.length < 1) reachedMax = true;
      }
    })();
    const searchResults = pokemonList.filter((pokemon) =>
      pokemon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    const currentPageResults = searchResults.slice(
      pagination,
      pagination + ITEMS_PER_PAGE
    );
    const pokemonSpeciesList = await Promise.all(
      currentPageResults.map((result) => {
        const pokemon = PokemonClient.getPokemonByName(result.name);
        return pokemon;
      })
    );
    setTotalResults(searchResults.length);
    setPokemonList(pokemonSpeciesList);
    setLoading(false);
  }

  async function getPokemon(page: number) {
    setLoading(true);
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
    setLoading(false);
  }

  useEffect(() => {
    getPokemon(0);
  }, []);

  useEffect(() => {
    findOrGetPokemon();
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 1) findOrGetPokemon();
    else setCurrentPage(1);
  }, [search]);

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
      {loading && <Loading />}
      {!loading && <DexDisplay pokemonList={pokemonList} />}
    </SearchProvider>
  );
}
