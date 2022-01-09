import React from 'react'
import MovieCard from './MovieCard.jsx'
export const Watchlist = ({watchList, removeFromWatchList}) => {
    return (
        <>
        
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">
                        My WatchList
                     </h1>
                     <span className="count-pill">
                         {watchList.length} {watchList.length == 1 ? "Movie" : "Movies"}
                     </span>
                </div>
                <div className="movie-grid">
                    {watchList.map(
                        movie => (
                            <MovieCard removeFromWatchList={removeFromWatchList} movie={movie} type="watchlist"/>
                        )
                        
                    )}
                </div>
            </div>
        </div>
        </>
        
    )
}
