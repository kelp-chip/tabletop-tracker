import "./search-bar.scss";
import API from "../../../API";

function SearchBar({ searchValue, setSearchValue, handleSearchSubmit }) {
  return (
    // <form id="search-container" onSubmit={(event) => handleSearchSubmit(event)}>
    //   <input
    //     type="text"
    //     id="search"
    //     value={searchValue}
    //     onChange={(e) => setSearchValue(e.target.value)}
    //   />
    //   <button id="search-btn" type="submit">
    //     <i className="fas fa-search"></i>
    //   </button>
    // </form>
    <div className="search-container">
      <i className="fas fa-search"></i>
    </div>
  );
}

export default SearchBar;
