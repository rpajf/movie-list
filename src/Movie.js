import React from 'react';
import './styles.css'



function Movie ({name, price, year}) {
  
  return(
    <div className="movieDiv">
     <h3>{name}</h3>
     <h2>{price}</h2>
     <h2>{year}</h2>

    </div>
  )

}
export default Movie;