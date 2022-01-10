import React from 'react'
import MovieControls from './MovieControls'
const MovieCard = ({movie, removeFromWatchList} ) => {

    return (
        <div className="movie-card">
            <div className="overlay"></div>
            {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} className="src" />
                ):(
                    <div className="filler-poster">
                          
                    </div>
                )
            }
            <MovieControls removeFromWatchList={removeFromWatchList} movie={movie}/>
        </div>
          
        
    )
}

export default MovieCard
