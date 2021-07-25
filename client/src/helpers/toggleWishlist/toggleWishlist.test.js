import toggleWishlist from "./toggleWishlist";
import "@testing-library/jest-dom/extend-expect";

describe("removes existing game id", () => {
  let mockWishlist = [{ id: "a" }, { id: "b" }, { id: "c" }];
  let { wishlist, saved } = toggleWishlist(mockWishlist[1], mockWishlist);

  test("in state", () => {
    expect(wishlist).toEqual([{ id: "a" }, { id: "c" }]);
    expect(saved).toBe(false);
  });
  test("in localStorage", () => {
    let lsWishlist = JSON.parse(localStorage.getItem("ttwishlist"));
    expect(lsWishlist).toEqual([{ id: "a" }, { id: "c" }]);
  });
});

describe("adds game id to wishlist in state", () => {
  let gameObj = {
    id: "d",
    images: { medium: 1 },
    primary_publisher: { name: 1 },
    name: "name",
    min_players: 1,
    max_players: 2,
    min_age: 4,
  };
  let mockWishlist = [{ id: "a" }, { id: "b" }, { id: "c" }];
  test("in state", () => {
    let { wishlist, saved } = toggleWishlist(gameObj, mockWishlist);
    console.log(wishlist);
    expect(wishlist).toEqual([
      {
        id: "d",
        images: { medium: 1 },
        primary_publisher: { name: 1 },
        name: "name",
        min_players: 1,
        max_players: 2,
        min_age: 4,
      },
      { id: "a" },
      { id: "b" },
      { id: "c" },
    ]);
    expect(saved).toBe(true);
  });
  test("in localStorage", () => {
    let lsWishlist = JSON.parse(localStorage.getItem("ttwishlist"));
    expect(lsWishlist).toEqual([
      {
        id: "d",
        images: { medium: 1 },
        primary_publisher: { name: 1 },
        name: "name",
        min_players: 1,
        max_players: 2,
        min_age: 4,
      },
      { id: "a" },
      { id: "b" },
      { id: "c" },
    ]);
  });
});
