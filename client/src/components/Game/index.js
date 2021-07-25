import "./Game.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Game({ game }) {
  const [chosen, setChosen] = useState(false);

  return (
    <div className="card">
      <div
        className="image-container"
        onMouseOver={() => setChosen(true)}
        onMouseLeave={() => setChosen(false)}
      >
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
        <Link
          to={`/game/${game.id}`}
          className={`link ${chosen && "chosen"}`}
          onMouseOver={() => setChosen(true)}
          onMouseLeave={() => setChosen(false)}
        >
          <strong>{game.name}</strong>
        </Link>
        <br />
        {game.primary_publisher && game.primary_publisher.name}
        <hr />
        <div className="short-details">
          <div>
            <i className="fas fa-user-friends icon"></i> {game.min_players} -{" "}
            {game.max_players}
          </div>
          <div>
            <i className="fas fa-birthday-cake icon"></i>
            {game.min_age}+
          </div>
          <div>
            <i className="fas fa-hourglass-half icon"></i> {game.max_playtime}
            mins
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
