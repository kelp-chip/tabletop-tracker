import axios from "axios";
import parse from "./parseData";
require("dotenv").config();

console.log("here it is: ", process.env.REACT_APP_CLIENT_ID);

const DOMAIN = "https://api.boardgameatlas.com/api/search?";
const fields =
  "&fields=id,name,price,min_players,max_players,min_playtime,max_playtime,min_age,image_url,year_published,description";

const API = {
  getSearchedGames(e, search, history, setGames) {
    e.preventDefault();
    if (search !== "") {
      axios(
        `${DOMAIN}name=${search}&exact=true&limit=6${fields}&order_by=num_user_ratings&client_id=${process.env.REACT_APP_CLIENT_ID}`
      ).then((result) => {
        let games = result.data.games;
        console.log(games);
        games = parse.json(games);
        setGames(games);
      });
    }
    history.push("/find");
  },

  getSpecifiedGames(e, minPlayers, age, setGames) {
    e.preventDefault();
    age = age === "all ages" ? 0 : 10;
    axios
      .get(
        `${DOMAIN}min_players=${minPlayers}&min_age=${age}${fields}&client_id=${process.env.REACT_APP_CLIENT_ID}`
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
      `https://api.boardgameatlas.com/api/search?random=true${fields}&client_id=${process.env.REACT_APP_CLIENT_ID}`
    ).then((result) => {
      const game = result.data.games[0];
      console.log(game);
      game.description = parse.text(game.description);
      setGame(game);
    });

    history.push("/game");
  },
};

export default API;
