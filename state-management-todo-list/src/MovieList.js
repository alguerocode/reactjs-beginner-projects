import React,{useContext} from 'react';
import Movie from './movie';
import { MovieListContext } from './movieListContext';
const MovieList = () => {
  const [movies] =useContext(MovieListContext);
  return ( 
    <div className="movie-list">
      {movies.map(movie =>(
      <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
   );
}
 
export default MovieList;