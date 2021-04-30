import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./scenes/Home";
import GamePage from "./scenes/GamePage";
import PageNotFound from "./scenes/404/index";
import PopularGames from "./tempData";
import API from "./API";
import "./App.scss";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [games, setGames] = useState([]);

  function handleSearchSubmit(event) {
    setGames([]);
    API.getSearchedGames(event, searchValue, setGames);
  }

  return (
    <BrowserRouter>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchSubmit={handleSearchSubmit}
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
