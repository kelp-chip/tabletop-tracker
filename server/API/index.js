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
        `${URL}name=${searchValue}&exact=true&limit=90&client_id=${process.env.CLIENT_ID}`
      )
      .then((result) => {
        let games = result.data.games;
        games = parse.json(games);
        cb(games);
      });
  },

  getSpecifiedGames(specs, cb) {
    if (specs) {
      let details = `&min_players=${specs.min_players}&min_age=${specs.min_age}`;
      console.log(specs.max_price);
      if (specs.max_price !== "null") {
        details += `&max_price=${specs.max_price}`;
      }
      if (specs.max_time !== "null") {
        details += `&max_time=${specs.max_time}`;
      }
      console.log(details);
      axios
        .get(`${URL}&order_by=rank&limit=12&client_id=${process.env.CLIENT_ID}`)
        .then((result) => {
          result = parse.json(result.data.games);
          cb(result);
        });
      return;
    } else {
      axios.get(`${URL}&client_id=${process.env.CLIENT_ID}`).then((result) => {
        result = parse.json(result.data.games);
        cb(result);
      });
    }
  },

  getRandom(cb) {
    axios(`${URL}random=true&client_id=${process.env.CLIENT_ID}`).then(
      (result) => {
        const game = result.data.games[0];
        console.log(game);
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
