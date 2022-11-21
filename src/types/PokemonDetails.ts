export type PokemonAbilityType = {
  name: string;
  is_hidden: boolean;
};

export type PokemonThumbnailType = {
  name: string;
  artwork_url: string | null;
};

export type PokemonDetailsType = {
  id: number;
  name: string;
  genus: string;
  artwork_url: string;
  types: string[];
  height: number;
  weight: number;
  gender_ratio: number;
  abilities: PokemonAbilityType[];
  evolves_from?: PokemonThumbnailType;
  forms?: PokemonThumbnailType[];
  varieties?: PokemonThumbnailType[];
};
