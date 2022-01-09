import React from 'react'
import MovieCard from './MovieCard.jsx'
export const Watchlist = ({watchList}) => {
    return (
        <>
        
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">
                        My WatchList
                     </h1>
                </div>
                <div className="movie-grid">
                    {watchList.map(
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
