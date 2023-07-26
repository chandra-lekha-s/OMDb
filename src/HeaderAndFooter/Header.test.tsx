import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

test("renders header with correct title and nav links", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // Check if the navbar brand "IMDb Lite" is rendered
  const brandElement = screen.getByText(/IMDb Lite/i);
  expect(brandElement).toBeInTheDocument();

  // Check if the "Popular" nav link is rendered
  const popularNavLink = screen.getByText(/Popular/i);
  expect(popularNavLink).toBeInTheDocument();

  // Check if the "UpComing" nav link is rendered
  const upComingNavLink = screen.getByText(/UpComing/i);
  expect(upComingNavLink).toBeInTheDocument();

  // Check if the "Top rated" nav link is rendered
  const topRatedNavLink = screen.getByText(/Top rated/i);
  expect(topRatedNavLink).toBeInTheDocument();
});

test("This Test should fail", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // Check if the navbar brand "IMDb Lite" is rendered
  const brandElement = screen.getByText(/IMDb pLite/i);
  expect(brandElement).not.toBeInTheDocument();
});
