import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

// Navbar component for each page
function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <h1 className="p-2 mb-2 ml-3">
                    <a className="navbar-brand pl-3 px-1" href="/">Google Books
                    </a>
                </h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-md-auto">
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link">Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/saved" className="nav-link">Saved</NavLink>
                        </li>
                    </ul>
                    <div className="px-3"></div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;