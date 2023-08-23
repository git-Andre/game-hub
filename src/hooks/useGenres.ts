import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;

}

const useGenres = () => {
  return { genres: genres, isLoading: false, error:null };

}

export default useGenres;
