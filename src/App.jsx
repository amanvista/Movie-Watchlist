import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Watchlist } from "./components/Watchlist.jsx";
import { Watched } from "./components/Watched.jsx";
import { Add } from "./components/Add.jsx";
import {ResultCard} from './components/ResultCard.jsx'
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Watchlist/>
        </Route>
        <Route exact path="/watched">
          <Watched/>
        </Route>
        <Route exact path="/add">
          <Add/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
