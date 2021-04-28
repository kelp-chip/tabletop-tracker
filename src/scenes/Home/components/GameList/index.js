import Game from "../Game";
import "./GameList.css";

function GameList({ games }) {
  let list = games.map((game) => <Game game={game} />);
  return (
    <div className="outter-container">
      {/* <div className="games-container">{list}</div> */}
      <div className="grid">
        <div className="col">
          <h3>col 1</h3>
        </div>
        <div className="col">
          <h3>col 2</h3>
        </div>
        <div className="col">
          <h3>col 3</h3>
        </div>
        <div className="col">
          <h3>col 4</h3>
        </div>
        <div className="col">
          <h3>col 5</h3>
        </div>
      </div>
    </div>
  );
}

export default GameList;
