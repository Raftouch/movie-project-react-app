import { useState } from "react";
import { getMovies } from "../api/movie";
import { IMovie } from "../models";

export const useMoviesQuery = () => {
    const [movies, setMovies] = useState<IMovie[] | undefined>();
    const testCallAPi = async () => {
        const test = await getMovies();
        setMovies(test.results)
      }

    testCallAPi();

    return { movies };
}