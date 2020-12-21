import React from 'react';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext';


function App() {
  return (
    <MovieProvider>
      {/* o estado do provider é conhecido por todos os components
        pois está sendo passado como props.chilndren
      */}
    <div className="App">
      <Nav/>
      <AddMovie/>
      <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App;
