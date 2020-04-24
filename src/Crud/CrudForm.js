import React, { useState, useEffect } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { addNote } from "../actions/crudActions";
import { withRouter } from "react-router-dom";

export const CrudForm = props => {
  const [inputValue, setInputValue] = useState({
    title: props.note ? props.note.title : "",
    body: props.note ? props.note.body : "",
  });
  const onChangeHandler = e => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    let noteData = {
      ...inputValue,
      id: uuid(),
    };
    props.onSubmit(noteData);
    setInputValue({
      title: "",
      body: "",
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="formWrapper">
          <input
            name="title"
            value={inputValue.title}
            onChange={onChangeHandler}
          />
          <textarea
            name="body"
            value={inputValue.body}
            onChange={onChangeHandler}
          />
          <button>{props.note ? "Edit" : "Add"}</button>
        </div>
      </form>
    </>
  );
};

export default connect(null, { addNote })(withRouter(CrudForm));
