import React, { useState, useMemo, useEffect, useRef } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./scenes/Home";
import UserWishlist from "./scenes/UserWishlist";
import GamePage from "./scenes/GamePage";
import PageNotFound from "./scenes/404/index";
import "./App.scss";
import axios from "axios";
import { WishlistContext } from "./context/wishlistContext";

require("dotenv").config();

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);
  const history = useHistory();
  const [wishlist, setWishlist] = useState(getWishlist());
  const providerWishlist = useMemo(
    () => ({ wishlist, setWishlist }),
    [wishlist, setWishlist]
  );

  function getWishlist() {
    let lsWishlist = localStorage.getItem("ttwishlist");
    if (lsWishlist) {
      console.log(JSON.parse(lsWishlist));
      return JSON.parse(lsWishlist);
    }
    return [];
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    await setGames([]);
    let { data: games } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/games/search`,
      {
        params: { searchValue: searchValue },
      }
    );
    await setSearchTitle("Search Results");
    await setGames(games);
    history.push("/");
  };

  const getPopularGames = async () => {
    let { data: games } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/games`
    );
    await setGames(games);
    await setSearchTitle("Popular Games");
  };

  const handleGetRandom = async () => {
    await setGame(null);
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/game`).then((game) => {
      history.push(`/game/${game.data.id}`);
    });
  };

  useEffect(() => {
    getPopularGames();
  }, []);

  return (
    <WishlistContext.Provider value={providerWishlist}>
      <div className="main-container">
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearchSubmit={handleSearchSubmit}
          setGames={setGames}
          setGame={setGame}
          wishlist={wishlist}
          getPopularGames={getPopularGames}
          setSearchTitle={setSearchTitle}
          handleGetRandom={handleGetRandom}
        />
        <main className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home {...props} games={games} searchTitle={searchTitle} />
              )}
            />
            <Route
              path="/wishlist"
              exact
              render={(props) => (
                <UserWishlist {...props} wishlist={wishlist} />
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
                  wishlist={wishlist}
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
              <a
                href="https://github.com/lexykio/tabletop-tracker"
                aria-label="github"
                title="github"
              >
                <i className="fab fa-github"></i>
              </a>
            </p>
          </div>
        </footer>
      </div>
    </WishlistContext.Provider>
  );
}

export default App;
