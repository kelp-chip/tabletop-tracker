import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./header.scss";

function Header({
  searchValue,
  setSearchValue,
  handleSearchSubmit,
  setGames,
  setGame,
  wishlist,
}) {
  return (
    <>
      {console.log(wishlist)}
      <header className="navbar-container">
        <div id="wishlist">
          <img
            alt="wishlist"
            src="https://image.flaticon.com/icons/png/512/1377/1377656.png"
            width="40px"
          ></img>
          <strong>{wishlist.length}</strong>
        </div>
        <div className="navbar">
          <Link
            className="logo"
            to="/"
            onClick={async () => {
              await setGames([]);
              await setGame(null);
            }}
          >
            <img src={logo} alt="tabletop tracker logo"></img>
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
