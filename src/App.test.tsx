import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import RoutingConfig from "./RoutingConfig";

test("renders App component without errors", () => {
  render(<App />);
});

test("renders App component without errors", () => {
  render(<RoutingConfig />);
});
