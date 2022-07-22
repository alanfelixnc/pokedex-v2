import { MainClient } from 'pokenode-ts';

const Client = new MainClient({
  cacheOptions: { maxAge: 30000, exclude: { query: false } },
});

export const PokemonClient = Client.pokemon;
