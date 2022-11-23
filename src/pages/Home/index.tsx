import { getPokemonById, getPokemons, PokemonClient } from 'api';
import DexDisplay from 'components/DexDisplay';
import Search from 'components/Search';
import React, { useContext, useEffect, useState } from 'react';
import { Pokemon, PokemonForm } from 'pokenode-ts';
import Pagination from 'components/Pagination';
import Loading from 'components/Loading';
import { FavoritesContext, SearchContext } from 'contexts';
import { FavoritesType, PokemonDetailsType } from 'types';
import PokemonDetails from 'components/PokemonDetails';
import decamarkIcon from 'assets/images/decamark.png';

type FavoriteStorageType = {
  favorites: FavoritesType;
};

const ITEMS_PER_PAGE = 30;

const EMPTY_POKEMON_DETAILS: PokemonDetailsType = {
  id: 0,
  name: '',
  genus: '',
  artwork_url: '',
  types: [],
  height: 0,
  weight: 0,
  gender_ratio: 0,
  abilities: [],
};

function paginateResults(results: Pokemon[], pagination: number): Pokemon[] {
  if (results.length < 1) return results;
  const currentPageResults = results.slice(
    pagination,
    pagination + ITEMS_PER_PAGE
  );
  return currentPageResults;
}

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<PokemonDetailsType>();
  const { favorites, setFavorites, showFavorites } =
    useContext(FavoritesContext);
  const { search, setSearch } = useContext(SearchContext);

  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);

  function toggleFavoritedPokemon(id: number) {
    let updatedFavorites: FavoritesType = [];
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
    } else {
      updatedFavorites = [
        ...favorites.filter((favoriteId) => favoriteId < id),
        id,
        ...favorites.filter((favoriteId) => favoriteId > id),
      ];
    }
    updateFavoritedPokemon(updatedFavorites);
  }

  async function getPokemonDetails(id: number) {
    setLoading(true);
    const pokemonDetails: PokemonDetailsType = EMPTY_POKEMON_DETAILS;
    const speciesResult = await PokemonClient.getPokemonSpeciesById(id);
    pokemonDetails.id = speciesResult.id;
    pokemonDetails.name = speciesResult.name;
    const pokemonGenera = speciesResult.genera.find(
      (genera) => genera.language.name === 'en'
    );
    pokemonDetails.genus = pokemonGenera?.genus || '';
    pokemonDetails.gender_ratio = speciesResult.gender_rate;
    const pokemonResult = await PokemonClient.getPokemonById(id);
    pokemonDetails.abilities = pokemonResult.abilities.map((ability) => ({
      name: ability.ability.name.replaceAll('-', ' '),
      is_hidden: ability.is_hidden,
    }));
    pokemonDetails.height = pokemonResult.height;
    pokemonDetails.weight = pokemonResult.weight;
    pokemonDetails.artwork_url =
      pokemonResult.sprites.other['official-artwork'].front_default || '';
    pokemonDetails.types = pokemonResult.types.map((type) => type.type.name);

    if (pokemonResult.forms.length > 1) {
      pokemonDetails.forms = await Promise.all(
        pokemonResult.forms.map(async (form) => {
          const formResult: PokemonForm =
            await PokemonClient.getPokemonFormByName(form.name);
          return {
            name: formResult.name.replaceAll('-', ' '),
            artwork_url: formResult.sprites.front_default || decamarkIcon,
          };
        })
      );
    } else {
      pokemonDetails.forms = undefined;
    }

    if (speciesResult.varieties.length > 1) {
      pokemonDetails.varieties = await Promise.all(
        speciesResult.varieties.map(async (variety) => {
          const varietyResult: Pokemon = await PokemonClient.getPokemonByName(
            variety.pokemon.name
          );
          return {
            name: varietyResult.name.replaceAll('-', ' '),
            artwork_url:
              varietyResult.sprites.other['official-artwork'].front_default ||
              varietyResult.sprites.front_default ||
              decamarkIcon,
          };
        })
      );
    } else {
      pokemonDetails.varieties = undefined;
    }
    setPokemon(pokemonDetails);
    setLoading(false);
  }

  function selectPokemon(id?: number): void {
    if (!id) setPokemon(undefined);
    else getPokemonDetails(id);
  }

  function findOrGetPokemon() {
    const pagination = (currentPage - 1) * ITEMS_PER_PAGE;
    if (!search) getPokemon(pagination);
    else findPokemon(pagination, search);
  }

  async function findPokemon(pagination: number, search: string) {
    if (showFavorites) return getFavoritePokemon(pagination, search);
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
    const currentPageResults = paginateResults(searchResults, pagination);
    setTotalResults(searchResults.length);
    setPokemonList(currentPageResults);
    setLoading(false);
  }

  async function getFavoritePokemon(pagination: number, search?: string) {
    setLoading(true);
    let pokemonList: Pokemon[] = [];
    for (const favorite of favorites) {
      const pokemon = await getPokemonById(favorite);
      pokemonList.push(pokemon);
    }
    if (search) {
      pokemonList = pokemonList.filter((pokemon) =>
        pokemon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
    const currentPageResults = paginateResults(pokemonList, pagination);
    setTotalResults(pokemonList.length);
    setPokemonList(currentPageResults);
    setLoading(false);
  }

  async function getPokemon(pagination: number) {
    if (showFavorites) return getFavoritePokemon(pagination);
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
    selectPokemon();
    if (currentPage === 1) findOrGetPokemon();
    else setCurrentPage(1);
  }, [search, showFavorites]);

  return (
    <>
      <Search
        setSearch={setSearch}
        showBackButton={Boolean(pokemon)}
        onGoBack={selectPokemon}
      />
      {!pokemon && (
        <Pagination
          onNext={() => setCurrentPage(currentPage + 1)}
          onPrevious={() => setCurrentPage(currentPage - 1)}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
      {loading && <Loading />}
      {!loading && !pokemon && (
        <DexDisplay
          pokemonList={pokemonList}
          favoritedPokemon={favorites}
          toggleFavoritedPokemon={toggleFavoritedPokemon}
          selectPokemon={selectPokemon}
        />
      )}
      {!loading && pokemon && (
        <PokemonDetails
          favorited={favorites.includes(pokemon.id)}
          pokemon={pokemon}
          toggleFavorited={toggleFavoritedPokemon}
        />
      )}
    </>
  );
}
