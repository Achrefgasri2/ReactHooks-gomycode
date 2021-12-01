import React from 'react'
import './MovieCard.css'
import { Rate } from 'antd';


const MovieCard = ({movie}) => {
    return (
        <div>
       
        <div className="Card">
          <img src={movie.posterURL} alt={movie.title} /> 
          <p>{movie.title}  {movie.description}  </p>
          <span><Rate disabled  value={movie.rating} /></span>
        </div>
        
      </div>
      
      
      
    )
}

export default MovieCard
