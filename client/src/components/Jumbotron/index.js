import React from "react";
import "./style.css"

// Jumbotron component for each page
function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark text-white">
      <div className="container">
        <h1  className="display-4 text-center mt-5 mb-3">Google Books Search</h1>
        <img className="logo" src="./googlebookslogo.png" alt="logo"/>
        <p className="lead text-center mt-3">Search for and Save Books of Interest</p>
      </div>
    </div>
  );
};

export default Jumbotron;