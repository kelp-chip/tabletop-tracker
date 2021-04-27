import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import API from "../../apiQueries";
import "./header.css";

function Header({ children, setGames, setGame }) {
  const history = useHistory();
  const [search, setSearch] = useState("");

  return (
    <header className="navbar-container">
      <div className="navbar">
        <Link className="logo" to="/">
          Tabletop Tracker
        </Link>
        <div className="nav-right">
          <button onClick={() => API.getRandom(history, setGame)}>
            get random
          </button>
          <form
            onSubmit={(event) =>
              API.getSearchedGames(event, search, history, setGames)
            }
          >
            <input
              type="text"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button id="search-btn" type="submit">
              search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
