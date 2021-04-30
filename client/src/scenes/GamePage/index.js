import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function GamePage() {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get("/getGame", { params: { id: id } }).then((game) => {
      console.log(game.data);
      setGame(game.data);
    });
  }, []);

  return <>{game && game.name}</>;
}

export default GamePage;

//...
