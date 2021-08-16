import Game from "../Game";
import Loading from "../Loading";
import "./GameList.scss";

function GameList({ games, searchTitle }) {
  let list = games.map((game) => <Game game={game} key={game.id} />);
  return (
    <div className="games-container">
      <div className="section">{searchTitle}</div>
      {games.length ? <div className="grid">{list}</div> : <Loading />}
    </div>
  );
}

export default GameList;
