import { PokemonClient } from 'api';
import { PokemonResults } from 'types';

export default async function getPokemons(
  pagination?: number,
  limit?: number
): Promise<PokemonResults> {
  const { results, count } = await PokemonClient.listPokemonSpecies(
    pagination,
    limit
  );
  const pokemonSpeciesList = await Promise.all(
    results.map((result) => {
      const pokemon = PokemonClient.getPokemonSpeciesByName(result.name);
      return pokemon;
    })
  );
  const pokemonList = await Promise.all(
    pokemonSpeciesList.map((pokemonSpecies) => {
      const pokemon = PokemonClient.getPokemonById(pokemonSpecies.id);
      return pokemon;
    })
  );
  return {
    results: pokemonList,
    count,
  };
}
