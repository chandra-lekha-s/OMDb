import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails/Details";
import Home from "./Home";
import SearchDisplay from "./HeaderAndFooter/SearchDisplay";
import Header from "./HeaderAndFooter/Header";

function RoutingConfig() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<MovieDetails />} />
          <Route path="detail/:imdb" element={<SearchDisplay />} />
        </Routes>
      </Router>
    </>
  );
}

export default RoutingConfig;
