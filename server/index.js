const express = require("express");
const app = express();
const PORT = 8080;
require("dotenv").config();

app.get("/searchedGames", (req, res) => {
  res.send("hey");
});

app.listen(PORT, () => {
  console.log(
    `Server now running on http://localhost:${PORT} ${process.env.CLIENT_ID}`
  );
});
