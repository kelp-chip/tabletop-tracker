import API from "../../API";
import Select from "../select";
import "./form.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function SearchForm({ setGames }) {
  const [minPlayers, setMinPlayers] = useState("2");
  const [age, setAge] = useState("all ages");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    API.getSpecifiedGames(e, minPlayers, age, setGames);
    history.push("/find");
  };

  return (
    <form className="form-container" onSubmit={handleSearch}>
      <div className="selectors">
        <Select
          name="min players"
          range={[1, 2, 3, 4, 5, 6]}
          state={minPlayers}
          setter={setMinPlayers}
        ></Select>
        <Select
          name="age"
          range={["all ages", "6+", "8+", "13+"]}
          state={age}
          setter={setAge}
        ></Select>
      </div>
      <input type="submit"></input>
    </form>
  );
}

export default SearchForm;
