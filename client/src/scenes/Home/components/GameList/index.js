import Game from "../Game";
import "./GameList.scss";
import { useEffect } from "react";

function GameList({ games, sectionName }) {
  let list = games.map((game) => <Game game={game} />);
  return (
    <div className="games-container">
      <div className="section">{sectionName}</div>
      <div className="grid">{list}</div>
    </div>
  );
}

export default GameList;
