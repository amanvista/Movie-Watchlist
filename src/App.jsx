import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Watchlist } from "./components/Watchlist.jsx";
import { Watched } from "./components/Watched.jsx";
import { Add } from "./components/Add.jsx";
import {ResultCard} from './components/ResultCard.jsx'
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import {useState, useEffect} from 'react'
function App() {
  const [watchList, setWatchList] = useState([])
  const addToWatchList = (movie)=>{
    setWatchList([movie,...watchList])
  }
  const removeFromWatchList = (watchedMovie)=>{
    console.log(watchList.filter(movie => movie.id != watchedMovie))
  }
  useEffect( ()=>
  {
    localStorage.setItem('watchlist', JSON.stringify(watchList))
  },[watchList])
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Watchlist watchList={watchList} removeFromWatchList={removeFromWatchList}/>
        </Route>
        <Route exact path="/watched">
          <Watched/>
        </Route>
        <Route exact path="/add">
          <Add watchList={watchList} addToWatchList={addToWatchList}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
