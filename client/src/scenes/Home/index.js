import GameList from "../../components/GameList";

function Home({ games, setGames, PopularGames, handleGetRandom }) {
  return (
    <>
      {games.length > 0 ? (
        <GameList games={games} sectionName="Search results" />
      ) : (
        <GameList games={PopularGames} sectionName="Popular Games" />
      )}
    </>
  );
}

export default Home;
