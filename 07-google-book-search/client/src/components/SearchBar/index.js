import React from "react";

// This file exports the search

export function SearchBar(props) {
  return (
    <div className="container">
    <div className="card">
      <input type="text" className="form-control text-center" onChange={props.handleSearchChange} />
      <button className="btn btn-secondary" onClick={props.searchBooks}> Search </button>
      
    </div>
    </div>
  );
}

export default SearchBar;