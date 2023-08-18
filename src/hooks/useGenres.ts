import useData from "./useData.ts";

interface Genre {
  id: number;
  name: string;
  image_background: string;

}

const useGenres = () => {
  const { data ,isLoading, error} = useData<Genre>('/genres');
  return { genres: data, isLoading, error };

}

export default useGenres;
