export default function isGameInWishlist(id, wishlist) {
  let index = wishlist.indexOf(id);
  if (index === -1) return { saved: false, index: null };
  else return { saved: true, index };
}
