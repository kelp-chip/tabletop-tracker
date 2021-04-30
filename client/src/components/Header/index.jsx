import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../images/logo.svg";
import logo6 from "../../images/logo6.svg";
import banner from "../../images/banner.jpeg";
import "./header.scss";

function Header({ searchValue, setSearchValue, handleSearchSubmit, setGames }) {
  return (
    <>
      <header className="navbar-container">
        <div className="navbar">
          <Link
            className="logo"
            to="/"
            onClick={() => {
              setGames([]);
            }}
          >
            <img src={logo6}></img>
          </Link>
          <div className="nav-right">
            <i class="fas fa-search"></i>
            <form onSubmit={(event) => handleSearchSubmit(event)}>
              <input
                type="text"
                id="search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              ></input>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

{
  /* <SearchBar
  searchValue={searchValue}
  setSearchValue={setSearchValue}
  handleSearchSubmit={handleSearchSubmit}
/> */
}
