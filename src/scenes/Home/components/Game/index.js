import "./Game.scss";

function Game({ game }) {
  return (
    <div className="card">
      <img
        src={game.image_url}
        alt={`${game.name}`}
        className="card-image"
      ></img>
      <div className="card-content">
        <strong>{game.name}</strong>
        <p>${game.price}</p>
      </div>
    </div>
  );
}

export default Game;
