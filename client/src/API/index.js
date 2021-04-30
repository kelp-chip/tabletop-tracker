import axios from "axios";
import parse from "./parseData";
require("dotenv").config();

console.log("here it is: ", process.env.REACT_APP_CLIENT_ID);

const URL = "https://api.boardgameatlas.com/api/search?";
const fields =
  "&fields=id,name,price,min_players,max_players,min_playtime,max_playtime,min_age,image_url,year_published,description";

const API = {
  getSearchedGames(event, searchValue, setGames) {
    event.preventDefault();
    if (searchValue !== "") {
      searchValue = searchValue.toLowerCase();
      axios
        .get(
          `${URL}name=${searchValue}&exact=true&order_by=num_user_ratings&client_id=${process.env.REACT_APP_CLIENT_ID}`
        )
        .then((result) => {
          let games = result.data.games;
          console.log(games);
          games = parse.json(games);
          setGames(games);
        });
    }
  },

  getSpecifiedGames(e, minPlayers, age, setGames) {
    e.preventDefault();
    age = age === "all ages" ? 0 : 10;
    axios
      .get(
        `${URL}min_players=${minPlayers}&min_age=${age}${fields}&client_id=${process.env.REACT_APP_CLIENT_ID}`
      )
      .then((result) => {
        result = parse.json(result.data.games);
        console.log(result);
        setGames(result);
      });
    return;
  },

  getRandom(history, setGame) {
    axios(
      `${URL}random=true${fields}&client_id=${process.env.REACT_APP_CLIENT_ID}`
    ).then((result) => {
      const game = result.data.games[0];
      console.log(game);
      game.description = parse.text(game.description);
      setGame(game);
    });

    history.push("/game");
  },
  getGame(index, history, setGame, games) {
    let game = games[index];
    game.description = parse.text(game.description);
    setGame(game);
    history.push("/game");
  },
  getPopularGames(setGames) {
    // event.preventDefault();
    axios
      .get(
        `${URL}exact=true&order_by=num_user_ratings&limit=6&client_id=${process.env.REACT_APP_CLIENT_ID}`
      )
      .then((result) => {
        let games = result.data.games;
        console.log(games);
        games = parse.json(games);
        setGames(games);
      });
  },
};

export default API;
