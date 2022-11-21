import { MainClient, UtilityClient as UtilClient } from 'pokenode-ts';

const OPTIONS = {
  cacheOptions: { maxAge: 30000, exclude: { query: false } },
};

const Client = new MainClient(OPTIONS);

export const PokemonClient = Client.pokemon;

export { default as getPokemons } from './getPokemons';
export { default as getPokemonById } from './getPokemonById';

export const UtilityClient = new UtilClient(OPTIONS);
