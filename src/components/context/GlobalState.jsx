 import React,{useEffect,} from "react";
 import GlobalContext from "./GlobalContext";
  

 const GlobalState = (props) =>{
     const gState = {
         watchlist:[],
         watched:[],
     }
    //  useEffect(()=>{
    //      console.log("Hi from use effect")
    //  }, gState)
     return (<GlobalContext.Provider value={gState}>
         {props.children}
     </GlobalContext.Provider>
     )
 }

 export default GlobalState;