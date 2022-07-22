export type SearchType = string;

export interface SearchContextProps {
  search: SearchType;
  setSearch: React.Dispatch<React.SetStateAction<SearchType>>;
}
