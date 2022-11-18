import { PokemonClient } from 'api';
import { Pokemon } from 'pokenode-ts';

export default async function getPokemonById(id: number): Promise<Pokemon> {
  const pokemon = await PokemonClient.getPokemonById(id);
  return pokemon;
}
