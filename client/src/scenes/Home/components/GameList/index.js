import Game from "../Game";
import "./GameList.scss";

function GameList({ games, sectionName }) {
  let list = games.map((game) => <Game game={game} key={game.id} />);
  return (
    <div className="games-container">
      <div className="section">{sectionName}</div>
      <div className="grid">{list}</div>
    </div>
  );
}

export default GameList;
