export type FavoritesType = Array<number>;

export interface FavoritesContextProps {
  favorites: FavoritesType;
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesType>>;
}
