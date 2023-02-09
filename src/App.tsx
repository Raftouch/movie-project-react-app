import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import {MovieBox} from './components/MovieBox'
// import { movies } from './data/movies-api';
// import axios from 'axios';
import { IMovie } from './models';
import { getMovies } from './api/movie';
import { useMoviesQuery } from './hooks/useMovieQuery';


function App() {
  const { movies, loading } = useMoviesQuery();

  console.log("movies", movies);
 

  if (loading || movies == null) return <h1 className='loading'>Loading...</h1>;

  return (
    <div className='movieDetails'>

      {movies.map(movie => <MovieBox movie={movie} key={movie.id} />)}


    </div>
  )
}

export default App;



// ?limit=5