import React from 'react'
import MovieCard from '../MovieCard/MovieCard.js'
import './MovieList.css'

const MovieList = (props) => {

    return (
        <div className="listMovies">
             {props.movies
              .filter(movie =>
                {
                    if(props.title === '' && props.rate === 0 ) return movie; 
                    if(props.title !== '' && props.rate === 0 ) return movie.title.toUpperCase().includes(props.title.toUpperCase()); 
                    if(props.title === '' && props.rate !== 0 ) return movie.rating.includes(props.rate); 
                    if(movie.title.toUpperCase().includes(props.title.toUpperCase()) && movie.rating.includes(props.rate))return movie;
                }).map((movie, i) =>
                <div key={i}>
                    <MovieCard movie={movie} />
                </div>
            )
            }
            
        
        </div>
    )
}

export default MovieList



