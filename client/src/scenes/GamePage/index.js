import { useParams, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function GamePage({ game, setGame }) {
  const { id } = useParams();

  useEffect(() => {
    axios.get("/getGame", { params: { id: id } }).then((game) => {
      console.log(game.data);
      setGame(game.data);
    });
  }, []);

  return <>{game && game.name}</>;
}

export default withRouter(GamePage);

//...
