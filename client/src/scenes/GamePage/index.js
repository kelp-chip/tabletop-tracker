import { useParams, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import GameDetails from "./components/GameDetails/index";
import ReactHtmlParser from "react-html-parser";
import GetRandom from "../../components/GetRandom";
import { WishlistContext } from "../../context/wishlistContext";
import "./GamePage.scss";

function GamePage({ game, setGame, handleGetRandom, wishlist }) {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const isSaved = () => {
    console.log("hey");
    if (game) {
      if (wishlist.indexOf(game.id) === -1) {
        setSaved(true);
      } else {
        setSaved(false);
      }
    }
  };

  const { id } = useParams();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/game/${id}`)
      .then(async (game) => {
        await setGame(game.data);
        await isSaved();
        console.log(saved);
      });
  }, []);

  if (game) {
    return (
      <>
        <GetRandom handleGetRandom={handleGetRandom}></GetRandom>
        <div className="game-container">
          <div className="game-header">
            <h1>{game.name}</h1>
            <button
              onClick={async () => {
                await setSaved(!saved);
              }}
            >
              {saved ? (
                <span>remove from wishlist</span>
              ) : (
                <span>add to wishlist</span>
              )}
            </button>
          </div>
          <div className="top-section">
            <img src={game.images.medium} alt={`${game.name}`}></img>
            <GameDetails game={game} />
          </div>
          <div className="game-description">
            {game.description ? (
              <h2>Description</h2>
            ) : (
              <h2>No Description Available</h2>
            )}
            {ReactHtmlParser(game.description)}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <GetRandom handleGetRandom={handleGetRandom}></GetRandom>
        <>loading</>;
      </>
    );
  }
}

export default withRouter(GamePage);
