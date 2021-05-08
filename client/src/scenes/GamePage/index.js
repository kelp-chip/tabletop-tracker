import { useParams, withRouter } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import GameDetails from "./components/GameDetails/index";
import ReactHtmlParser from "react-html-parser";
import "./GamePage.scss";

function GamePage({ game, setGame }) {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getGame`, {
        params: { id: id },
      })
      .then((game) => {
        setGame(game.data);
      });
  }, [id, setGame]);

  if (game) {
    return (
      <div className="game-container">
        <h1>{game.name}</h1>
        <div className="top-section">
          <img src={game.images.medium} alt={`${game.name}`}></img>
          <GameDetails game={game} />
        </div>
        <div className="game-description">
          <h2>Description</h2>
          {ReactHtmlParser(game.description)}
        </div>
      </div>
    );
  } else {
    return <>loading</>;
  }
}

export default withRouter(GamePage);
