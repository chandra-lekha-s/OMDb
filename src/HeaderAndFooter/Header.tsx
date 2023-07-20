import React from "react";
import Search from "./SearchMovie";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black pb-3">
      <Link to={"/"} className="navbar-brand">
        IMDb Lite
      </Link>
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
            <Link to={"/"} className="nav-link">
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              UpComing
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Top rated
            </Link>
          </li>
        </ul>
        <div className="flex-grow-1"></div>
        <Search />
      </div>
    </nav>
  );
};

export default Header;
