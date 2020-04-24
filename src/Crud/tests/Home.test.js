import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { Home } from "../Home";

test("should render Landing page correctly", () => {
  const wrapper = shallow(<Home />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
