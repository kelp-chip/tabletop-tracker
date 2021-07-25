import { useParams, withRouter } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import GameDetails from "./components/GameDetails/index";
import ReactHtmlParser from "react-html-parser";
import GetRandom from "../../components/GetRandom";
import { WishlistContext } from "../../context/wishlistContext";
import toggleWishlist from "../../helpers/toggleWishlist/toggleWishlist";
import isGameInWishlist from "../../helpers/isGameInWishlist/isGameInWishlist";
import "./GamePage.scss";

function GamePage({ game, setGame, handleGetRandom }) {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { id } = useParams();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    //get game data
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/game/${id}`)
      .then(async (game) => {
        await setGame(game.data);
        let { saved: isSaved } = await isGameInWishlist(id, wishlist);
        await setSaved(isSaved);
      });
  }, [id, setGame, saved, wishlist]);

  if (game) {
    return (
      <>
        <GetRandom handleGetRandom={handleGetRandom}></GetRandom>
        <div className="game-container">
          <div className="game-header">
            <h1>{game.name}</h1>
            <button
              onClick={async () => {
                let wishlistCopy = [...wishlist];
                const res = await toggleWishlist(game, wishlistCopy);
                await setWishlist(res.wishlist);
                await setSaved(res.saved);
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
