import "./search-bar.css";

function SearchBar() {
  return (
    <form
      id="search-container"
      onSubmit={(event) => console.log("searching...")}
    >
      <input
        type="text"
        id="search"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />
      <button id="search-btn" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
