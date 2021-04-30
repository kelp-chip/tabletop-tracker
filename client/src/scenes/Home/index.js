import GameList from "./components/GameList";
import Form from "./components/Form";

function Home({ games, setGames, PopularGames }) {
  return (
    <>
      <Form></Form>
      {games.length > 0 ? (
        <GameList games={games} sectionName="Search results" />
      ) : (
        <GameList games={PopularGames} sectionName="Popular Games" />
      )}
    </>
  );
}

export default Home;
