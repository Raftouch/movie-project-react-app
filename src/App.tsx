import './App.css';
import {MovieBox} from './components/MovieBox'
import { useMoviesQuery } from './hooks/useMovieQuery';
import { Header } from './components/Header';


function App() {
  const { movies, loading } = useMoviesQuery();

  console.log("movies", movies);
 

  if (loading || movies == null) return <h1 className='loading'>Loading...</h1>;

  return (
    <>
    <Header />
    <div className='movieDetails'>
      {movies.map(movie => <MovieBox movie={movie} key={movie.id} />)}
    </div>
    </>
  )
}

export default App;