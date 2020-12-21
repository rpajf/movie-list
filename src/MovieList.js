import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';



function MovieList ({name}) {
  const [movies, setMovie] = useContext(MovieContext)
  
  return(
    <div>

      {movies.map(movie =>(
        <>
        <Movie name={movie.name} price={movie.price} year={movie.year}/>
        </>

      ))}
    </div>
  )

}
export default MovieList;