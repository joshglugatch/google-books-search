import React from "react";
import "./style.css";

// This file exports the search

export function SearchBar(props) {
  return (
    <div className="container mb-5">
    <div className="card">
      <input type="text" className="bar form-control text-center" onChange={props.handleSearchChange} />
    </div>
    <button className="btn btn-primary mt-4" id="searchBtn" onClick={props.searchBooks}> Search Books </button>
    </div>
  );
}

export default SearchBar;