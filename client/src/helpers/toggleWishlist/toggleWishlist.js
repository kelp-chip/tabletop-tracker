export default function toggleWishlist(id, wishlist) {
  let index = wishlist.indexOf(id);
  let saved;
  if (index === -1) {
    wishlist.unshift(id);
    saved = true;
  } else {
    wishlist.splice(index, 1);
    saved = false;
  }
  localStorage.setItem("ttwishlist", wishlist);
  return { wishlist, saved };
}
