import React, { useState } from "react";

function Search({ searchMovie }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };
  const callSearchFunction = (e) => {
    e.preventDefault();
    searchMovie(searchValue);
    setSearchValue("");
  };
  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
}

export default Search;
