const parse = {
  json(games) {
    games = games.filter((game) => {
      if (
        !game.name.includes("Promo") &&
        game.min_age !== null &&
        game.min_age !== 0 &&
        Number(game.price) !== 0
      ) {
        return game;
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

  text(desc) {
    return desc.toString().replace(/(<([^>]+)>)/gi, "");
  },
};

export default parse;
