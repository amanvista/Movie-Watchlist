import React, {useContext, useState} from 'react'
import GlobalContext from './context/GlobalContext.jsx'

export const ResultCard =({movie})=> {

    const gState = useContext(GlobalContext)

    const awatch = (movie)=>{
        gState.watchlist = [movie,...gState.watchlist]
    }
    
    

    return (
        <div className='result-card'>
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} className="src" />
                ):(
                    <div className="filler-poster">
                          
                    </div>
                )
            }
                
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">{movie.release_date ? movie.release_date.substring(0,4) : "-"}</h4>
                </div>
                <div className="control">
                {/* addToWatchList(movie) */}
                <button className="btn" onClick={ ()=>{awatch(movie)}}>Add to Watchlist</button>
            </div>
            </div>
            
        </div>
    )
}
