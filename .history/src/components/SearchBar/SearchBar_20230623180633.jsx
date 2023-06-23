import React, { useState, useCallback } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    onSearch(term);
  }, [onSearch, term]);

  return (
    <formclassName="SearchBar">
      <input placeholder="Enter A Song Title" onChange={handleTermChange}/> <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
  
    </formclassName=>
  );
};

export default SearchBar;
