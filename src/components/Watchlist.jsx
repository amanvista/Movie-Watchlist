import React from 'react'
import MovieCard from './MovieCard.jsx'
import { useContext } from 'react'
import GlobalContext from './context/GlobalContext.jsx'

export const Watchlist = () => {
    const gState = useContext(GlobalContext)
    return (
        <>
        
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">
                        My WatchList
                     </h1>
                     <span className="count-pill">

                         {gState.watchlist.length} Movies
                     </span>
                </div>
                <div className="movie-grid">
                    {gState.watchlist.map(
                        movie => (
                            <MovieCard movie={movie} type="watchlist"/>
                        )
                        
                    )}
                    
                </div>
            </div>
        </div>
        </>
        
    )
}
