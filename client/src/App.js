import React, { useState, useMemo, useEffect } from "react";
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
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/games/search`, {
        params: { searchValue: searchValue },
      })
      .then(async (games) => {
        await setGames(games.data);
        await setSearchValue("");
        history.push("/");
      });
  };

  const getPopularGames = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/games`)
      .then((games) => setGames(games.data));
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
                  PopularGames={games}
                  handleGetRandom={handleGetRandom}
                />
              )}
            />
            <Route
              path="/wishlist"
              exact
              render={(props) => (
                <UserWishlist
                  {...props}
                  wishlist={wishlist}
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
              <a href="https://github.com/lexykio/tabletop-tracker">
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
