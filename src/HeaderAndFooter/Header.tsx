import React from "react";
import Search from "./SearchMovie";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black pb-3">
      <a className="navbar-brand" href="#">
        IMDb Lite
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Celebrities
            </a>
          </li>
        </ul>
        <div className="flex-grow-1"></div>
        <Search />
      </div>
    </nav>
  );
};

export default Header;
