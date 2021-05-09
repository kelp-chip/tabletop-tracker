import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./scenes/Home";
import GamePage from "./scenes/GamePage";
import PageNotFound from "./scenes/404/index";
import PopularGames from "./storedData/popularGames";
import returnId from "./storedData/randomGames";
import "./App.scss";
import axios from "axios";
require("dotenv").config();

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);
  const history = useHistory();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/searchedGames`, {
        params: { searchValue: searchValue },
      })
      .then(async (games) => {
        console.log(games.data);
        await setGames(games.data);
        await setSearchValue("");
        history.push("/");
      });
  };

  const handleGetRandom = () => {
    let id = returnId();
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getGame`, {
        params: { id: id },
      })
      .then((game) => {
        history.push(`/game/${game.data.id}`);
      });
  };

  return (
    <div className="main-container">
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
                handleGetRandom={handleGetRandom}
              />
            )}
          />
          <Route
            path="/game/:id"
            exact
            render={(props) => (
              <GamePage
                {...props}
                game={game}
                setGame={setGame}
                handleGetRandom={handleGetRandom}
              />
            )}
          />
          <Route path="/*" component={PageNotFound} exact />
        </Switch>
      </main>
      <footer>
        <div>
          <p>
            Built using the{" "}
            <a href="https://www.boardgameatlas.com/">Board Game Atlas</a> API
          </p>
          <p>
            <a href="https://github.com/lexykio/tabletop-tracker">
              <i className="fab fa-github"></i>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
