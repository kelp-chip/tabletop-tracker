import ReactDOM from "react-dom";
import GameList from "../index";

import { cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GameList />, div);
});
