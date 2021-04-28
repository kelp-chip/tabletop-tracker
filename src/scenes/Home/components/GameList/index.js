import Game from "../Game";
import "./GameList.scss";

function GameList({ games }) {
  let list = games.map((game) => <Game game={game} />);
  return (
    <div className="games-container">
      <div className="grid">{list}</div>
    </div>
  );
}

export default GameList;
