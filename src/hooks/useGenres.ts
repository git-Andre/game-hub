import useData from "./useData.ts";

interface Genre {
  id: number;
  name: string;
  image_background: string;

}

const useGenres = () => {
  const { data } = useData<Genre>('/genres');
  return { genres: data };

}

export default useGenres;
