import { getPokemons } from 'api';
import DexDisplay from 'components/DexDisplay';
import Search from 'components/Search';
import React, { useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import Pagination from 'components/Pagination';
import Loading from 'components/Loading';
import { FavoritesProvider, SearchProvider } from 'contexts';
import { FavoritesType, SearchType } from 'types';

type FavoriteStorageType = {
  favorites: FavoritesType;
};

const ITEMS_PER_PAGE = 30;

export default function Home() {
  const [search, setSearch] = useState<SearchType>('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<FavoritesType>([]);

  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);

  function findOrGetPokemon() {
    const pagination = (currentPage - 1) * ITEMS_PER_PAGE;
    if (!search) getPokemon(pagination);
    else findPokemon(pagination, search);
  }

  async function findPokemon(pagination: number, search: string) {
    setLoading(true);
    const pokemonList: Pokemon[] = [];
    let reachedMax = false;
    let searchPage = 0;
    await (async () => {
      while (!reachedMax) {
        const { results } = await getPokemons(searchPage * 300, 300);
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
    setTotalResults(searchResults.length);
    setPokemonList(currentPageResults);
    setLoading(false);
  }

  async function getPokemon(pagination: number) {
    setLoading(true);
    const { results, count } = await getPokemons(
      pagination,
      currentPage === totalPages ? undefined : ITEMS_PER_PAGE
    );
    setTotalResults(count);
    setPokemonList(results);
    setLoading(false);
  }

  function updateFavoritedPokemon(favoritedPokemon: FavoritesType) {
    const favoriteStorage: FavoriteStorageType = {
      favorites: favoritedPokemon,
    };
    localStorage.setItem('favoritedPokemon', JSON.stringify(favoriteStorage));
    setFavorites(favoritedPokemon);
  }

  useEffect(() => {
    getPokemon(0);
    const favoritedPokemon = localStorage.getItem('favoritedPokemon');
    if (favoritedPokemon) {
      const favoritesId: FavoriteStorageType = JSON.parse(favoritedPokemon);
      setFavorites(favoritesId.favorites);
    }
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
      <FavoritesProvider
        value={{
          favorites,
          setFavorites,
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
        {!loading && (
          <DexDisplay
            pokemonList={pokemonList}
            favoritedPokemon={favorites}
            setFavoritedPokemon={updateFavoritedPokemon}
          />
        )}
      </FavoritesProvider>
    </SearchProvider>
  );
}
