import { Link } from "react-router-dom";
import logo6 from "../../images/logo6.svg";
import "./header.scss";

function Header({
  searchValue,
  setSearchValue,
  handleSearchSubmit,
  setGames,
  setGame,
}) {
  return (
    <>
      <header className="navbar-container">
        <div className="navbar">
          <Link
            className="logo"
            to="/"
            onClick={async () => {
              await setGames([]);
              await setGame(null);
            }}
          >
            <img src={logo6} alt="tabletop tracker logo"></img>
          </Link>
          <div className="nav-right">
            <i className="fas fa-search"></i>
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
