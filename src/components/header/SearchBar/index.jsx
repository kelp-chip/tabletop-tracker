import "./search-bar.scss";

function SearchBar({ searchValue, setSearchValue }) {
  return (
    <form
      id="search-container"
      onSubmit={(event) => console.log("searching...")}
    >
      <input
        type="text"
        id="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button id="search-btn" type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
