import parse from "./parseData";
require("dotenv").config();

const getGame = (index, history, setGame, games) => {
  let game = games[index];
  game.description = parse.text(game.description);
  setGame(game);
  history.push("/game");
};

export default getGame;
