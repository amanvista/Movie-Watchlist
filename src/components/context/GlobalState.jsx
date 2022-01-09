import React, { createContext, useReducer, useEffect} from 'react'
import AppReducer from "./AppReducer.jsx"
// initial State
const initialState = {
    watchlist:[],
    watched:[]
}
// create Context
export const GlobalContext = createContext(initialState)

//provider components
export const GlobalProvider  = props =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
    //actions
    const addMovieToWatchlist = movie =>{
        dispatch({type: "Add_MOVIE_TO_WATCHLIST", payload: movie})
    }
    return (
        <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched}}>
            {props.children}
        </GlobalContext.Provider>
    )
}