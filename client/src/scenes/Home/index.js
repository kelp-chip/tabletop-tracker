import GameList from "./components/GameList";
import Form from "./components/Form";
import { useEffect } from "react";
import API from "../../API";

function Home({ games, setGames, PopularGames }) {
  // useEffect(() => {
  //   API.getPopularGames(setGames);
  // }, []);
  return (
    <>
      {/* <h2>Home</h2> */}
      <Form></Form>
      <GameList games={PopularGames} sectionName="Popular Games" />
    </>
  );
}

export default Home;
