const express = require("express");
const app = express();
const PORT = 8080;
require("dotenv").config();
const API = require("./API");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/searchedGames", (req, res) => {
  const { searchValue } = req.query;
  console.log(searchValue);
  API.getSearchedGames(searchValue, (games) => res.json(games));
});

app.get("/getGame", (req, res) => {
  const { id } = req.query;
  API.getGame(id, (game) => res.send(game));
});

app.get("/randomGame", (req, res) => {
  API.getRandom((game) => res.send(game));
});

app.listen(PORT, () => {
  console.log(
    `Server now running on http://localhost:${PORT} ${process.env.CLIENT_ID}`
  );
});
