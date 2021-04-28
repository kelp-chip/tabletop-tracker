import Game from "../Game";
import "./GameList.css";

function GameList({ games }) {
  let list = games.map((game) => <Game game={game} />);
  return (
    <div className="outter-container">
      <div className="games-container">{list}</div>
    </div>
  );
}

export default GameList;
