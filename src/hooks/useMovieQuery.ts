import { useEffect, useState } from "react";
import { getMovies } from "../api/movie";
import { IMovie } from "../models";

export const useMoviesQuery = () => {
  const [loading, setLoading] = useState(true); 
  const [movies, setMovies] = useState<IMovie[] | undefined>();   

    const testCallAPi = async () => {
        const test = await getMovies();
        setMovies(test.results);
        return test.results;
      }

      useEffect(() => {
        testCallAPi();
        setLoading(false);
      }, []);


    return { movies, loading };
}