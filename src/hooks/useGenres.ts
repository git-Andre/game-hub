import useData from "./useData.ts";

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const { data } = useData<Genre>('/genres');
  return { genres: data };

}

export default useGenres;
