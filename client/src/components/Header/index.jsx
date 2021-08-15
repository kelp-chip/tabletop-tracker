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
              await setGames([]);
              await setGame(null);
            }}
          >
            <img src={logo} width="250px"></img>
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
              <i class="fas fa-random"></i>
            </div>
            <Link to="/wishlist">
              <div title="wishlist" className={styles.navLink}>
                <i class="fas fa-heart"></i> <span> {wishlist.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <Form setGames={setGames}></Form>
    </>
  );
}

export default Header;
