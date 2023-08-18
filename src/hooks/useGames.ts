import useData from "./useData.ts";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => {
  const { data, isLoading, error } = useData<Game>('/games')

  return { games: data, error, isLoading };
}

export default useGames;
