import React from "react";
import CrudForm from "./CrudForm";
import { connect } from "react-redux";
import { addNote } from "../actions/crudActions";

export const CrudAdd = props => {
  const onSubmit = data => {
    props.addNote(data);
  };
  return (
    <div>
      <CrudForm onSubmit={data => onSubmit(data)} id="add" />
    </div>
  );
};

export default connect(null, { addNote })(CrudAdd);
