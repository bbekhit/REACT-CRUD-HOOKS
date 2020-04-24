import React from "react";
import { shallow } from "enzyme";
import { CrudForm } from "../CrudForm";
import notes from "./mockData";

describe("Crud Form", () => {
  it("submit form with correct data", () => {
    let submitFormSpy = jest.fn();
    const wrapper = shallow(
      <CrudForm onSubmit={submitFormSpy} note={notes[0]} />
    );
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(submitFormSpy).toHaveBeenLastCalledWith({
      title: notes[0].title,
      body: notes[0].body,
    });
  });
});
