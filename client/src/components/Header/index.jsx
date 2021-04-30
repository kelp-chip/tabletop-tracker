import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../images/logo.svg";
import logo6 from "../../images/logo6.svg";
import banner from "../../images/banner.jpeg";
import "./header.scss";

function Header({ searchValue, setSearchValue, handleSearchSubmit }) {
  return (
    <>
      <header className="navbar-container">
        <div className="navbar">
          <Link className="logo" to="/">
            <img src={logo6}></img>
            {/* Tabletop Tracker <i class="fas fa-map"></i> */}
            {/* <i class="fas fa-puzzle-piece"></i> */}
          </Link>
          <div className="nav-right">
            {/* <button>get random</button>
            <button>search</button> */}
            {/* <i class="fas fa-dice"></i> */}
            {/* <div id="search-container"> */}
            <i class="fas fa-search"></i>
            <input type="text" id="search"></input>
            {/* </div> */}
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
