import GameList from "./components/GameList";

function Home({ games, setGames }) {
  return (
    <>
      <div className="container">Home</div>
      <GameList games={games} />
    </>
  );
}

export default Home;
