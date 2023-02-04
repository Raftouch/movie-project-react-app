import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import {MovieBox} from './components/MovieBox'
// import { movies } from './data/movies-api';
// import axios from 'axios';
import { IMovie } from './models';
import { getMovies } from './api/movie';
import { useMoviesQuery } from './hooks/useMovieQuery';


function App() {
  const { movies } = useMoviesQuery();
  console.log(movies)


  if (movies == null) return null;

  return (
    <div className='movieDetails'>

      {movies.map(movie => <MovieBox movie={movie} key={movie.id} />)}

      {/* <MovieBox movie = {movies[0]} />
      <MovieBox movie = {movies[1]} /> */}

    </div>
  )
}

export default App;



// ?limit=5