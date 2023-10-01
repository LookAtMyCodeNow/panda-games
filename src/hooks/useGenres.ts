import useData from "./useData";

// Dodajemy image_backgrund do naszego interface
export interface Genre {
    id: number;
    name: string;
    image_background: string;
} 

const useGenres =() => useData<Genre>('/genres');

export default useGenres;