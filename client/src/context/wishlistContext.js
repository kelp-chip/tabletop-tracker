import { createContext } from "react";

const getWishlist = () => {
  let lsWishlist = localStorage.getItem("ttwishlist");
  lsWishlist = JSON.parse(lsWishlist);
  if (!lsWishlist) {
    localStorage.setItem("ttwishlist", "[]");
    return [];
  }
  return lsWishlist;
};

export const WishlistContext = createContext(getWishlist());
