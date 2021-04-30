import "./Game.scss";
import { Link } from "react-router-dom";

function Game({ game }) {
  return (
    <div className="card">
      <div className="image-container">
        <Link to={`/game/${game.id}`}>
          <img
            src={game.images.medium}
            alt={`${game.name}`}
            className="card-image"
            data-id={game.id}
          ></img>
        </Link>
      </div>
      <div className="card-content">
        <strong>{game.name}</strong>
        <br />
        {game.primary_publisher.name}
        <hr />
        <div className="game-details">
          <div>
            <i class="fas fa-user-friends"></i> {game.min_players} -{" "}
            {game.max_players}
          </div>
          <div>ages {game.min_age}+</div>
          {/* <div>{game.price}</div> */}
        </div>
        {/* <div className="game-details">
          <div>
            {" "}
            {"<"} {game.max_playtime} mins
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Game;
