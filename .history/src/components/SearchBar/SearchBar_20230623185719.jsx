import React, { useState, useCallback } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    event.preventDefault();
    setTerm(event.target.value);
  }, []);

  const search = useCallback(
    (event) => {
      event.preventDefault();
      onSearch(term);
    },
    [onSearch, term]
  );

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
