import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./scenes/Home";
import GamePage from "./scenes/GamePage";
import PageNotFound from "./scenes/404";
import tempData from "./tempData";
import "./App.scss";

function App() {
  const [searchValue, setSearchValue] = useState("");
  // const [games, setGames] = useState([tempData[0]]);
  const [games, setGames] = useState(tempData);

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);
  return (
    <BrowserRouter>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Home {...props} games={games} setGames={setGames} />
          )}
        />
        <Route path="/game/:id" component={GamePage} exact />
        <Route path="/*" component={PageNotFound} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
