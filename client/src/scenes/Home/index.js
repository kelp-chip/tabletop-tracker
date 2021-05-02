import GameList from "./components/GameList";
import Form from "./components/Form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import returnId from "../../randomGames";

function Home({ games, setGames, PopularGames }) {
  let history = useHistory();

  const handleGetRandom = () => {
    let id = returnId();
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getGame`, {
        params: { id: id },
      })
      .then((game) => {
        history.push(`/game/${game.data.id}`);
      });
  };
  return (
    <>
      <Form handleGetRandom={handleGetRandom} setGames={setGames}></Form>
      {games.length > 0 ? (
        <GameList games={games} sectionName="Search results" />
      ) : (
        <GameList games={PopularGames} sectionName="Popular Games" />
      )}
    </>
  );
}

export default Home;
