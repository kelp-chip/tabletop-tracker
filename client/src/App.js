import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./scenes/Home";
import GamePage from "./scenes/GamePage";
import PageNotFound from "./scenes/404/index";
import PopularGames from "./popularGames";
import "./App.scss";
import axios from "axios";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);

  // const [minAge, setMinAge] = useState("")

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    axios
      .get("/searchedGames", {
        params: { searchValue: searchValue },
      })
      .then(async (games) => {
        console.log(games.data);
        await setGames(games.data);
        await setSearchValue("");
      });
  };

  return (
    <Router>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchSubmit={handleSearchSubmit}
        setGames={setGames}
        setGame={setGame}
      />
      <main className="container">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                games={games}
                setGames={setGames}
                PopularGames={PopularGames}
              />
            )}
          />
          <Route
            path="/game/:id"
            exact
            render={(props) => (
              <GamePage {...props} game={game} setGame={setGame} />
            )}
          />
          <Route path="/*" component={PageNotFound} exact />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
