import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    axios
      .get("/searchedGames", {
        params: { searchValue: searchValue },
      })
      .then((games) => {
        console.log(games.data);
        setGames(games.data);
      });
  };

  // const handleClicked = (event) => {
  //   let id = event.target.getAttribute("data-id");
  //   console.log(id);
  //   axios.get("/getGame", { params: { id: id } }).then((game) => {
  //     console.log(game.data);
  //     setGame(game.data);
  //   });
  // };

  return (
    <BrowserRouter>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchSubmit={handleSearchSubmit}
        setGames={setGames}
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
          <Route path="/game/:id" component={GamePage} exact />
          <Route path="/*" component={PageNotFound} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
