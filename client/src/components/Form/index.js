import styles from "./Form.module.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Form({ setGames, setSearchTitle }) {
  const [minPlayers, setMinPlayers] = useState("1");
  const [minAge, setMinAge] = useState("6");
  const [maxPrice, setMaxPrice] = useState("50");
  const [maxTime, setMaxTime] = useState("40");
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let games = await axios.get(`${process.env.REACT_APP_SERVER_URL}/games`, {
      params: {
        min_players: minPlayers,
        min_age: minAge,
        max_price: maxPrice,
        max_time: maxTime,
      },
    });
    console.log(games);
    await setSearchTitle("Search Results");
    await setGames(games.data);
    await history.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.innerWrapper}
        onSubmit={(event) => handleFormSubmit(event)}
      >
        <div>
          <label>min players</label>
          <select
            value={minPlayers}
            onChange={(event) => setMinPlayers(event.target.value)}
          >
            <option value="1">1 player</option>
            <option value="2">2 players</option>
            <option value="3">3 players</option>
            <option value="4">4 players</option>
            <option value="5">5 players</option>
            <option value="6">6 players</option>
          </select>
        </div>
        <div>
          <label>min age</label>
          <select
            value={minAge}
            onChange={(event) => setMinAge(event.target.value)}
          >
            <option defaultValue value="6">
              6+
            </option>
            <option value="7">7+</option>
            <option value="8">8+</option>
            <option value="10">10+</option>
            <option value="13">13+</option>
          </select>
        </div>

        <div>
          <label>max time</label>
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
        </div>
        <div className={styles.slider}>
          <label>max price</label>
          <input
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            type="range"
            min="5"
            max="105"
            step="5"
          ></input>
          <span>{maxPrice > 100 ? "100+" : maxPrice}</span>
        </div>
        <input
          type="submit"
          value="Find Games"
          className={styles.submitBtn}
        ></input>
      </form>
    </div>
  );
}

export default Form;
