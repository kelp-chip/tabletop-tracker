import { Link } from "react-router-dom";
import { useRef } from "react";
import logo from "../../images/logo.svg";
import Form from "../Form";
import styles from "./header.module.scss";

function Header({
  searchValue,
  setSearchValue,
  handleSearchSubmit,
  setGames,
  setGame,
  wishlist,
  getPopularGames,
  setSearchTitle,
  handleGetRandom,
}) {
  const searchRef = useRef(null);
  return (
    <>
      <header className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <Link
            className={styles.logo}
            to="/"
            onClick={async () => {
              await getPopularGames();
              await setGame(null);
              await setSearchValue("");
            }}
          >
            <img src={logo} width="250px" alt="logo"></img>
          </Link>
          <div className={styles.searchContainer}>
            <form onSubmit={(event) => handleSearchSubmit(event)}>
              <input
                type="text"
                className={styles.searchbar}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                ref={searchRef}
              ></input>
            </form>
            <i
              className={`fas fa-search ${styles.searchIcon}`}
              onClick={() => searchRef.current.focus()}
            ></i>
          </div>
          <div className={styles.navRight}>
            <div className={styles.navLink}>
              {" "}
              <button className={styles.linkbtn}>
                <i class="fas fa-random" onClick={handleGetRandom}></i>
              </button>
            </div>
            <Link to="/wishlist">
              <div title="wishlist" className={styles.navLink}>
                your favorites <span> ({wishlist.length})</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <Form setGames={setGames} setSearchTitle={setSearchTitle}></Form>
    </>
  );
}

export default Header;
