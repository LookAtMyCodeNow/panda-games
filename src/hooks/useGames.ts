import useData from "./useData";
import { Genre } from "./useGenres";


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

  //  Zmiana tego jakie gry nam pokazuje, paramas to funkcja wbudowana w rawg.iom sluzy do selekcji gier
  // params czyli selekcja od czego? od genres a po przecinku jakie genres pokazuje? te o danym id chyba:D beka:D
const useGames = (selectedGenre: Genre | null ) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useGames;