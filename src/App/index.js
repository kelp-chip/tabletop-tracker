import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import GameList from "../pages/GameList";
import Game from "../pages/Game";
import Header from "../components/header";
import "./app.css";

function App() {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);

  return (
    <Router>
      <Header setGames={setGames} setGame={setGame} />
      <div className="container">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} setGames={setGames} />}
          />
          <Route
            path="/find"
            exact
            render={(props) => (
              <GameList {...props} games={games} setGame={setGame} />
            )}
          />
          <Route
            path="/game"
            render={(props) => <Game {...props} game={game} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
