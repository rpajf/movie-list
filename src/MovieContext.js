import React, {useState, createContext} from 'react';

export const MovieContext = createContext();
/* a informação contida neste arquivo será usada
  através do createContext, o Provider da acesso
  aos componentes que precisam conhecer esses dados

  O estado fica separado apenas no seu proprio context component
*/

export const MovieProvider = (props) =>{
  const [movies, setMovies] = useState([
    {
      name: 'Hp',
      price: 'R$20',
      year: 2004
    },
    {
      name: 'Shutter',
      price: 'R$10',
      year: 2010
    },
    {
      name: 'Zodiac',
      price: 'R$40',
      year: 1990
    },
    {
      name: 'Zodiac',
      price: 'R$40',
      year: 1999
    }
  ]);
  return(
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}