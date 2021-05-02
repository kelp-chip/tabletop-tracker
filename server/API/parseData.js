const parse = {
  json(games) {
    games = games.filter((game) => {
      if (
        !game.name.includes("Promo") &&
        game.name &&
        game.type === "game" &&
        game.min_age !== null
        // Number(game.price) !== 0
      ) {
        return game;
      } else {
        return "";
      }
    });
    games.map((game) => {
      if (Number(game.price) <= 0) {
        game.price = "price not found";
      } else game.price = `$${game.price}`;
      return game;
    });
    return games;
  },
};

module.exports = parse;
