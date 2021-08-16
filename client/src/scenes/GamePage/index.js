import { useParams, withRouter } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import GameDetails from "./components/GameDetails/index";
import ReactHtmlParser from "react-html-parser";
import { WishlistContext } from "../../context/wishlistContext";
import toggleWishlist from "../../helpers/toggleWishlist/toggleWishlist";
import isGameInWishlist from "../../helpers/isGameInWishlist/isGameInWishlist";
import Loading from "../../components/Loading";
import styles from "./GamePage.module.scss";

function GamePage({ game, setGame }) {
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
        <div className={styles.gameContainer}>
          <div className={styles.topSection}>
            <div className={styles.imageWrapper}>
              <img
                src={game.images.medium}
                alt={`${game.name}`}
                className={styles.gameImg}
              ></img>
            </div>
            <GameDetails
              game={game}
              wishlist={wishlist}
              setSaved={setSaved}
              setWishlist={setWishlist}
              toggleWishlist={toggleWishlist}
              saved={saved}
            />
          </div>
          <div className={styles.gameDescription}>
            {game.description ? (
              <h3>Description</h3>
            ) : (
              <h3>No Description Available</h3>
            )}
            {ReactHtmlParser(game.description)}
          </div>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
}

export default withRouter(GamePage);
