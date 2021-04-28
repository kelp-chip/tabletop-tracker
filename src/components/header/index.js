import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../images/logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="navbar-container">
      <div className="navbar">
        <Link className="logo" to="/">
          <img alt="tabletop tracker logo" src={logo}></img>
        </Link>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
