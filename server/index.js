const express = require("express");
const app = express();
const PORT = 8080;
const API = require("./API");
const cors = require("cors");
// const randomId = require("./storedData/randomGames");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/game/:id", (req, res) => {
  const { id } = req.params;
  API.getGame(id, (game) => res.send(game));
});

//returns random game
app.get("/game", (req, res) => {
  API.getRandom((game) => res.send(game));
});

app.get("/games", (req, res) => {
  const specs = req.query;
  API.getSpecifiedGames(specs, (games) => res.send(games));
});

app.get("/games/search", (req, res) => {
  const { searchValue } = req.query;
  console.log(searchValue);
  API.getSearchedGames(searchValue, (games) => res.json(games));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server now running on http://localhost:${PORT} ${process.env.CLIENT_ID}`
  );
});
