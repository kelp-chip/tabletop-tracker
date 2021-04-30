const axios = require("axios");
const parse = require("./parseData");
require("dotenv").config();

console.log("here it is: ", process.env.CLIENT_ID);

const URL = "https://api.boardgameatlas.com/api/search?";

const API = {
  getSearchedGames(searchValue, cb) {
    console.log(searchValue);
    searchValue = searchValue.toLowerCase();
    axios
      .get(
        `${URL}name=${searchValue}&exact=true&order_by=num_user_ratings&client_id=${process.env.CLIENT_ID}`
      )
      .then((result) => {
        let games = result.data.games;
        games = parse.json(games);
        cb(games);
      });
  },

  getSpecifiedGames(specs, cb) {
    age = age === "all ages" && 0;
    const hey = `min_players=${specs.min_players}&min_age=${specs.min_age}&max_price=${specs.max_price}&max_playtime=${specs.max_playtime}`;
    axios.get(`${URL}&client_id=${process.env.CLIENT_ID}`).then((result) => {
      result = parse.json(result.data.games);
      console.log(result);
      setGames(result);
    });
    return;
  },

  getRandom(cb) {
    axios(`${URL}random=true&client_id=${process.env.CLIENT_ID}`).then(
      (result) => {
        const game = result.data.games[0];
        console.log(game);
        game.description = parse.text(game.description);
        cb(game);
      }
    );
  },
  getGame(id, cb) {
    axios(`${URL}ids=${id}&client_id=${process.env.CLIENT_ID}`).then(
      (result) => {
        const game = result.data.games[0];
        game.description = parse.text(game.description);
        cb(game);
      }
    );
  },
};

module.exports = API;
