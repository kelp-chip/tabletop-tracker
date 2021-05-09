import "./GameDetails.scss";

export default function GameDetails({ game }) {
  return (
    <div className="game-details">
      <ul>
        <li>
          <i className="fas fa-user-friends icon"></i> {game.min_players} -{" "}
          {game.max_players} players
        </li>
        <li>
          <i className="fas fa-birthday-cake icon"></i> {game.min_age} years +
        </li>
        <li>
          <i className="fas fa-hourglass-half icon"></i> {game.min_playtime}{" "}
          mins to {game.max_playtime} mins
        </li>
        <li>
          <i className="fas fa-tag icon"></i> ${game.price}
        </li>
        <li>
          Published in {game.year_published} by{" "}
          <a href={game.official_url}>{game.primary_publisher.name}</a>
        </li>
      </ul>
    </div>
  );
}
