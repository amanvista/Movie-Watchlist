 import React from "react";
 import GlobalContext from "./GlolablContext";
  

 const GlobalState = (props) =>{
     const gState = {
         watchlist:[],
         watched:[],
     }
     return (<GlobalContext.Provider value={gState}>
         {props.children}
     </GlobalContext.Provider>
     )
 }

 export default GlobalState;