import "./GameDetails.scss";
import emptyStars from "../../../../images/empty_stars.svg";
import fullStars from "../../../../images/full_stars.svg";
import meeplesGreen from "../../../../images/meeples_green.svg";
import meeplesBlue from "../../../../images/meeples_blue.svg";

export default function GameDetails({
  game,
  wishlist,
  setSaved,
  setWishlist,
  toggleWishlist,
  saved,
}) {
  let {
    min_playtime,
    max_playtime,
    min_age,
    min_players,
    max_players,
    price,
    year_published,
    official_url,
    primary_publisher,
    average_user_rating,
    average_learning_complexity,
    average_strategy_complexity,
  } = game;

  const getPercentage = (rating) => {
    return Math.round((rating / 5) * 1000) / 10;
  };

  let ratingPercent = getPercentage(average_user_rating);
  let averageLearningCompexity = getPercentage(average_learning_complexity);
  let averageStrategyCompexity = getPercentage(average_strategy_complexity);

  return (
    <div className="game-details">
      <div className="detailsHeader">
        <div className="gameName">
          {game.name}
          <span>({year_published})</span>
        </div>
        <div className="headerRight">
          <div className="starsContainer">
            <img src={emptyStars} alt="empty stars"></img>
            <div
              className="fullStarsContainer"
              style={{ width: `${ratingPercent}%` }}
            >
              <img src={fullStars} alt="full stars"></img>
            </div>
          </div>
          <button
            onClick={async () => {
              let wishlistCopy = [...wishlist];
              const res = await toggleWishlist(game, wishlistCopy);
              await setWishlist(res.wishlist);
              await setSaved(res.saved);
            }}
            aria-label="favorites"
            title="favorites"
          >
            {saved ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="far fa-heart"></i>
            )}
          </button>
        </div>
      </div>
      <div className="secondHeader">
        <div className="liFlex2">
          <div>
            {min_players} - {max_players} players
          </div>{" "}
          <div>Age: {min_age} years +</div>
          <div>
            {" "}
            {min_playtime === max_playtime
              ? ` ${max_playtime} mins`
              : ` ${min_playtime} mins - 
              ${max_playtime} mins`}
          </div>
        </div>
      </div>

      <ul>
        <li className="liFlex">
          Learning Complexity:
          <div className="meepleContainer">
            <div style={{ width: `${averageLearningCompexity}%` }}>
              <img src={meeplesBlue} alt="blue meeples"></img>
            </div>
          </div>
        </li>
        <li className="liFlex">
          Strategy Complexity:
          <div className="meepleContainer">
            <div style={{ width: `${averageStrategyCompexity}%` }}>
              <img src={meeplesGreen} alt="green meeples"></img>
            </div>
          </div>
        </li>
        <li>
          {primary_publisher ? (
            <>
              Publisher:
              <a href={official_url}> {primary_publisher.name}</a>
            </>
          ) : (
            ""
          )}
        </li>
        <li>Artists: {game.artists.join(", ")}</li>
        <li>
          Price:
          {Number(price) === 0 ? "price not available" : ` $${price}`}
        </li>
      </ul>
    </div>
  );
}
