import GameList from "../../components/GameList";
import GetRandom from "../../components/GetRandom";
import { withRouter } from "react-router-dom";

function UserWishlist({ wishlist, handleGetRandom }) {
  return (
    <>
      <GetRandom handleGetRandom={handleGetRandom}></GetRandom>
      <div className="wishlist-container">
        {wishlist.length > 0 ? (
          <GameList games={wishlist} sectionName="Wishlist" />
        ) : (
          <span>wishlist is empty</span>
        )}
      </div>
    </>
  );
}

export default withRouter(UserWishlist);
