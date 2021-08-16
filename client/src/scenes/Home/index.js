import GameList from "../../components/GameList";

function Home({ games, searchTitle }) {
  return (
    <>
      <GameList games={games} searchTitle={searchTitle} />
    </>
  );
}

export default Home;
