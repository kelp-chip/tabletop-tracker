import "./GameDetails.scss";

export default function GameDetails({ game }) {
  let {
    min_playtime,
    max_playtime,
    min_age,
    min_players,
    max_players,
    price,
    year_published,
    official_url,
    primary_publisher,
  } = game;

  return (
    <div className="game-details">
      <ul>
        <li>
          <i className="fas fa-user-friends icon"></i> {min_players} -{" "}
          {max_players} players
        </li>
        <li>
          <i className="fas fa-birthday-cake icon"></i> {min_age} years +
        </li>
        <li>
          <i className="fas fa-hourglass-half icon"></i>
          {min_playtime === max_playtime
            ? `${max_playtime} mins`
            : `${min_playtime} mins to 
          ${max_playtime} mins`}
        </li>

        <li>
          <i className="fas fa-tag icon"></i>

          {Number(price) === 0 ? "price not available" : `$${price}`}
        </li>
        <li>
          Published in {year_published} by{" "}
          <a href={official_url}>{primary_publisher.name}</a>
        </li>
      </ul>
    </div>
  );
}
