import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'
import './styles.css';



function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="navtab">
      <h3>Username</h3>
      <p>Lista de filmes: {movies.length}</p>
    </div>
  );
}

export default Nav;