function Game({ game }) {
  return game ? (
    <>
      <img src={game.image_url} alt="game box"></img>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
    </>
  ) : (
    <>loading</>
  );
}

export default Game;
