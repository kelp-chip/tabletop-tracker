import toggleWishlist from "./toggleWishlist";
import "@testing-library/jest-dom/extend-expect";

describe("removes existing game id", () => {
  let mockWishlist = ["a", "b", "c"];
  let id = "b";
  let { wishlist, saved } = toggleWishlist(id, mockWishlist);

  test("in state", () => {
    expect(wishlist).toEqual(["a", "c"]);
    expect(saved).toBe(false);
  });
  test("in localStorage", () => {
    let lsWishlist = localStorage.getItem("ttwishlist").split(",");
    expect(lsWishlist).toEqual(["a", "c"]);
  });
});

describe("adds game id to wishlist in state", () => {
  let mockWishlist = ["a", "b", "c"];
  let id = "d";
  test("in state", () => {
    let { wishlist, saved } = toggleWishlist(id, mockWishlist);
    expect(wishlist).toEqual(["d", "a", "b", "c"]);
    expect(saved).toBe(true);
  });
  test("in localStorage", () => {
    let lsWishlist = localStorage.getItem("ttwishlist").split(",");
    expect(lsWishlist).toEqual(["d", "a", "b", "c"]);
  });
});
