import isGameInWishlist from "../isGameInWishlist/isGameInWishlist";

export default function toggleWishlist(id, wishlist) {
  let { saved, index } = isGameInWishlist(id, wishlist);
  if (!saved) {
    wishlist.unshift(id);
  } else {
    wishlist.splice(index, 1);
  }
  let wishlistStr = wishlist.join(",");
  localStorage.setItem("ttwishlist", wishlistStr);
  saved = !saved;
  return { wishlist, saved };
}
