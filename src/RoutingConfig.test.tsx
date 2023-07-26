import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutingConfig from "./RoutingConfig";
import "@testing-library/jest-dom/extend-expect";

test("renders RoutingConfig component without errors", () => {
  render(<RoutingConfig />);
});
