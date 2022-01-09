import React, {useContext} from 'react'
import GlobalContext from './context/GlobalContext.jsx'

const MovieControls = ({movie}) => {
    const gState = useContext(GlobalContext)
    const removeFromWatchList = ()=>{
        gState.watched = [movie, ...gState.watched]
        
    }
    return (
        <div className="inner-card-controls">
            <button className="ctrl-btn">

                <i className="fa-fw far fa-eye" onClick={()=>removeFromWatchList()}>
                </i>
            </button>
            <button className="ctrl-btn" >
                <i className="fa-fw fa fa-times">
                </i>
            </button>
        </div>
    )
}

export default MovieControls
