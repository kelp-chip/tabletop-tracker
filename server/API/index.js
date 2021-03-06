const axios = require("axios");
const parse = require("./parseData");
require("dotenv").config();

console.log("here it is: ", process.env.CLIENT_ID);

const URL = "https://api.boardgameatlas.com/api/search?";

const API = {
  getSearchedGames(searchValue, cb) {
    searchValue = searchValue.toLowerCase();
    axios
      .get(
        `${URL}name=${searchValue}&exact=true&limit=90&client_id=${process.env.CLIENT_ID}`
      )
      .then((result) => {
        let games = result.data.games;
        games = parse.json(games);
        cb(games);
      });
  },

  getSpecifiedGames(specs, cb) {
    let details = `&min_players=${specs.min_players}&min_age=${specs.min_age}`;
    if (specs.max_price !== "null") {
      details += `&lt_price=${specs.max_price}`;
    }
    if (specs.max_time !== "null") {
      details += `&lt_max_playtime=${specs.max_time}`;
    }
    axios
      .get(`${URL}${details}&client_id=${process.env.CLIENT_ID}`)
      .then((result) => {
        result = parse.json(result.data.games);
        cb(result);
      });
    return;
  },

  getPopularGames(cb) {
    axios
      .get(`${URL}&order_by=rank&limit=12&client_id=${process.env.CLIENT_ID}`)
      .then((result) => {
        result = parse.json(result.data.games);
        cb(result);
      });
    return;
  },

  getRandom(cb) {
    axios(`${URL}random=true&client_id=${process.env.CLIENT_ID}`).then(
      (result) => {
        const game = result.data.games[0];
        cb(game);
      }
    );
  },
  getGame(id, cb) {
    axios(`${URL}ids=${id}&client_id=${process.env.CLIENT_ID}`).then(
      (result) => {
        const game = result.data.games[0];
        cb(game);
      }
    );
  },
};

module.exports = API;
