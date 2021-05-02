import "./Form.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Form({ handleGetRandom, setGames }) {
  const [minPlayers, setMinPlayers] = useState("1");
  const [minAge, setMinAge] = useState("6");
  const [maxPrice, setMaxPrice] = useState("30");
  const [maxTime, setMaxTime] = useState("40");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:8080/SpecifiedGames", {
        params: {
          min_players: minPlayers,
          min_age: minAge,
          max_price: maxPrice,
          max_time: maxTime,
        },
      })
      .then((games) => setGames(games.data));
  };

  return (
    <form className="form-grid" onSubmit={(event) => handleFormSubmit(event)}>
      <label>
        min players
        <br />
        <select
          value={minPlayers}
          onChange={(event) => setMinPlayers(event.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>
      <label>
        min age
        <br />
        <select
          value={minAge}
          onChange={(event) => setMinAge(event.target.value)}
        >
          <option selected value="6">
            6+
          </option>
          <option value="7">7+</option>
          <option value="8">8+</option>
          <option value="10">10+</option>
          <option value="13">13+</option>
        </select>
      </label>
      <label>
        max price
        <br />
        <select
          value={maxPrice}
          onChange={(event) => setMaxPrice(event.target.value)}
        >
          <option value="10">$10</option>
          <option value="20">$20</option>
          <option value="30">$30</option>
          <option value="40">$40</option>
          <option value="50">$50</option>
          <option value="null">no limit</option>
        </select>
      </label>
      <label>
        max time
        <br />
        <select
          value={maxTime}
          onChange={(event) => setMaxTime(event.target.value)}
        >
          <option value="10">10 mins</option>
          <option value="20">20 mins</option>
          <option value="30">30 mins</option>
          <option value="40">40 mins</option>
          <option value="60">1 hour</option>
          <option value="null">no limit</option>
        </select>
      </label>
      <input type="submit" value="Find Games"></input>
      <div className="dice-container">
        <i
          className="fas fa-dice"
          title="get random game"
          onClick={() => handleGetRandom()}
        ></i>
      </div>
    </form>
  );
}

export default Form;