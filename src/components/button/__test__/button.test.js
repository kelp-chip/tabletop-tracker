import ReactDOM from "react-dom";
import Button from "../index";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me"></Button>);
  expect(getByTestId("button")).toHaveTextContent("click me");
});

it("renders button correctly again", () => {
  const { getByTestId } = render(<Button label="save"></Button>);
  expect(getByTestId("button")).toHaveTextContent("save");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
