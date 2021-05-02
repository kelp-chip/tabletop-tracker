import { useParams, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useSpring, animated } from "react-spring";
import ReactHtmlParser from "react-html-parser";
import "./GamePage.scss";

function GamePage({ game, setGame }) {
  const { id } = useParams();

  useEffect(() => {
    axios.get("/getGame", { params: { id: id } }).then((game) => {
      console.log(game.data);
      setGame(game.data);
    });
  }, []);

  if (game) {
    return (
      <div className="game-container">
        <h1>{game.name}</h1>
        <div className="top-section">
          <img src={game.images.medium}></img>
          <div className="game-details">
            <ul>
              <li>
                <i class="fas fa-user-friends icon"></i> {game.min_players} -{" "}
                {game.max_players} players
              </li>
              <li>
                <i class="fas fa-birthday-cake icon"></i> {game.min_age} years +
              </li>
              <li>
                <i class="fas fa-hourglass-half icon"></i> {game.min_playtime}{" "}
                mins to {game.max_playtime} mins
              </li>
              <li>
                <i class="fas fa-tag icon"></i> ${game.price}
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

//...
