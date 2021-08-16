import GameList from "../../components/GameList";
import { withRouter } from "react-router-dom";

function UserWishlist({ wishlist }) {
  return (
    <>
      <div className="wishlist-container">
        {wishlist.length > 0 ? (
          <GameList games={wishlist} sectionName="Your Saved Games" />
        ) : (
          <span>wishlist is empty</span>
        )}
      </div>
    </>
  );
}

export default withRouter(UserWishlist);
