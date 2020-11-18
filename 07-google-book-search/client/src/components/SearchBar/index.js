import React from "react";

// This file exports the search

export function SearchBar(props) {
  return (
    <div className="container mb-5">
    <div className="card">
      <input type="text" className="form-control text-center" onChange={props.handleSearchChange} />
      
      
    </div>
    <button className="btn btn-primary mt-4" onClick={props.searchBooks}> Search </button>
    </div>
  );
}

export default SearchBar;