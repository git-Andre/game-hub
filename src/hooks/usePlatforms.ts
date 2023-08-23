import useData from "./useData.ts";
import { Platform } from "./useGames.ts";

const usePlatforms = () => {
  const { data, isLoading, error } = useData<Platform>('/platforms/lists/parents');
  return { platforms: data, isLoading, error };

}

export default usePlatforms;
