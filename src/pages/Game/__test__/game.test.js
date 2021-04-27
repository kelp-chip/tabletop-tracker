import ReactDOM from "react-dom";
import Game from "../index";
import { cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Game></Game>, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<Game></Game>).toJSON();
  expect(tree).toMatchSnapshot();
});
