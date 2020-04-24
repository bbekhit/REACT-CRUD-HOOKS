import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { CrudEdit } from "../CrudEdit";
import notes from "./mockData";

describe("Crud Add", () => {
  let wrapper;
  let editNote;
  let history;
  beforeEach(() => {
    editNote = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
      <CrudEdit
        note={notes[0]}
        editNote={editNote}
        history={history}
        notesData={notes}
      />
    );
  });
  it("renders correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("handles onSubmit correctly", () => {
    wrapper.find("#edit").prop("onSubmit")(notes[0]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editNote).toHaveBeenLastCalledWith(notes[0].id, notes[0]);
  });
});
