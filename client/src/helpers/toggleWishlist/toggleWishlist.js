import isGameInWishlist from "../isGameInWishlist/isGameInWishlist";
// id, .images.medium,name,primary_publisher.name, min_players, max_players,min_age,
export default function toggleWishlist(game, wishlist) {
  let { saved, index } = isGameInWishlist(game.id, wishlist);
  if (!saved) {
    let gameObj = {
      id: game.id,
      images: { medium: game.images.medium },
      primary_publisher: { name: game.primary_publisher.name },
      name: game.name,
      min_players: game.min_players,
      max_players: game.max_players,
      min_age: game.min_age,
    };
    wishlist.unshift(gameObj);
  } else {
    wishlist.splice(index, 1);
  }
  let wishlistStr = JSON.stringify(wishlist);
  localStorage.setItem("ttwishlist", wishlistStr);
  saved = !saved;
  return { wishlist, saved };
}
