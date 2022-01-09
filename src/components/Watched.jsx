import React, {useContext} from 'react'
import GlobalContext from './context/GlobalContext.jsx'
import MovieCard from './MovieCard.jsx'
export const Watched = () => {
    const gState = useContext(GlobalContext)

    return (
        <div>
            <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">
                        Watched Movies
                     </h1>
                     <span className="count-pill">

                         {gState.watched.length} Watched Movies
                     </span>
                </div>
                <div className="movie-grid">
                    {gState.watched.map(
                        movie => (
                            <MovieCard movie={movie} type="watchlist"/>
                        )
                        
                    )}
                    
                </div>
            </div>
        </div>
        </div>
    )
}
