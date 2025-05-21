import MovieList from "./MovieList";
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);
  return (
    movies.nowPlayingMovies && ( 
    <div className="-top-8 relative">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <div className="">
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.PopularMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Action"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer;