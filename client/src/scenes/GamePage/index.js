import { useParams, withRouter } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
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
          <div className="game-details">
            <ul>
              <li>
                <i className="fas fa-user-friends icon"></i> {game.min_players}{" "}
                - {game.max_players} players
              </li>
              <li>
                <i className="fas fa-birthday-cake icon"></i> {game.min_age}{" "}
                years +
              </li>
              <li>
                <i className="fas fa-hourglass-half icon"></i>{" "}
                {game.min_playtime} mins to {game.max_playtime} mins
              </li>
              <li>
                <i className="fas fa-tag icon"></i> ${game.price}
              </li>
              <li>
                Published in {game.year_published} by{" "}
                {game.primary_publisher.name}
              </li>
              <li>
                <a href={game.official_url}>official site</a>
              </li>
            </ul>
          </div>
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
