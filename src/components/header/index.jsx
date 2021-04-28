import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../images/logo.svg";
import "./header.css";

function Header({ searchValue, setSearchValue }) {
  return (
    <>
      <header className="navbar-container">
        <div className="navbar">
          <Link className="logo" to="/">
            <img alt="tabletop tracker logo" src={logo}></img>
          </Link>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
