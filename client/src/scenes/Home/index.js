import GameList from "../../components/GameList";

function Home({ games, setGames, PopularGames, handleGetRandom }) {
  return (
    <>
      <GameList games={games} sectionName="Search results" />
    </>
  );
}

export default Home;
