import { Card } from "react-bootstrap";
import "./gameList.css";
import getGame from "../../apiQueries/getGame";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function GameList({ games, setGame }) {
  const history = useHistory();

  const handleClick = (e) => {
    let index = e.target.getAttribute("data-name");
    getGame(index, history, setGame, games);
  };

  let gameList = <li>loading</li>;
  console.log(games);
  if (games) {
    gameList = games.map((game, i) => (
      <Card className="single-card" key={game.id} style={{ width: "18rem" }}>
        <div className={"img-container"}>
          <Card.Img
            className="img"
            variant="top"
            src={game.image_url}
            onClick={handleClick}
            data-name={i}
          />
        </div>
        <Card.Body>
          <Card.Title>
            {game.name}
            <br />
            {game.price}
          </Card.Title>
          <Card.Text>
            <strong>Playtime: </strong>
            {game.min_playtime === game.max_playtime
              ? game.min_playtime
              : `${game.min_playtime} - ${game.max_playtime}`}
            mins
            <br />
            <strong>Ages: </strong> {game.min_age}+
            <br />
            {game.year_published}
            <button onClick={handleClick} data-name={game.name}>
              learn more
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  }
  return (
    <>
      <h1>Game List</h1>
      <div className="card-container">{gameList}</div>
    </>
  );
}

export default GameList;
