import GameList from "./components/GameList";
import Form from "./components/Form";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Home({ games, setGames, PopularGames }) {
  let history = useHistory();

  const handleGetRandom = () => {
    axios.get("/randomGame").then((game) => {
      history.push(`/game/${game.data.id}`);
    });
  };
  return (
    <>
      <Form handleGetRandom={handleGetRandom}></Form>
      {games.length > 0 ? (
        <GameList games={games} sectionName="Search results" />
      ) : (
        <GameList games={PopularGames} sectionName="Popular Games" />
      )}
    </>
  );
}

export default Home;
