import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import notes from "./mockData";
import { CrudAdd } from "../CrudAdd";

describe("Add Note", () => {
  let wrapper;
  let addNote;
  beforeEach(() => {
    addNote = jest.fn();
    wrapper = shallow(<CrudAdd addNote={addNote} />);
  });

  it("renders correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("handle onSubmit correctly", () => {
    wrapper.find("#add").prop("onSubmit")(notes[0]);
    expect(addNote).toHaveBeenLastCalledWith(notes[0]);
  });
});
