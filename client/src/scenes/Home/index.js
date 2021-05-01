import GameList from "./components/GameList";
import Form from "./components/Form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import returnId from "../../randomGames";

function Home({ games, setGames, PopularGames }) {
  let history = useHistory();

  const handleGetRandom = () => {
    let id = returnId();
    axios.get("/getGame", { params: { id: id } }).then((game) => {
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
