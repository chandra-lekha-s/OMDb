import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails/Details";
import SearchDisplay from "./HeaderAndFooter/SearchDisplay";
import SearchMovie from "./HeaderAndFooter/SearchMovie";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
