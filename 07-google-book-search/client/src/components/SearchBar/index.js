import React from "react";

// This file exports the search

export function SearchBar(props) {
  return (
    <div className="card">
      <input type="text" className="form-control" onChange={props.handleSearchChange} />
      <button onClick={props.searchBooks}> Search </button>
      
    </div>
  );
}

export default SearchBar;