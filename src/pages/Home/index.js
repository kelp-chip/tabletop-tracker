// import { useState } from "react";
import SearchForm from "../../components/form";
import "./home.css";

function Home({ setGames }) {
  return (
    <>
      <div className="form-container">
        <h1>Search for a Game:</h1>
        <SearchForm setGames={setGames} />
      </div>
    </>
  );
}

export default Home;
