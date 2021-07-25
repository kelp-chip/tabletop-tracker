import GameList from "../../components/GameList";
import { withRouter } from "react-router-dom";

function UserWishlist({ wishlist }) {
  return (
    <>
      {/* <Form handleGetRandom={handleGetRandom} setGames={setGames}></Form> */}
      {wishlist.length > 0 ? (
        <GameList games={wishlist} sectionName="Wishlist" />
      ) : (
        <span>wishlist is empty</span>
      )}
    </>
  );
}

export default withRouter(UserWishlist);
