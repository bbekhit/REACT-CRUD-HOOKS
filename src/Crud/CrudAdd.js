import React from "react";
import CrudForm from "./CrudForm";
import { connect } from "react-redux";
import { addNote } from "../actions/crudActions";

const CrudAdd = props => {
  const onSubmit = data => {
    props.addNote(data);
  };
  return (
    <div>
      <CrudForm onSubmit={data => onSubmit(data)} />
    </div>
  );
};

export default connect(null, { addNote })(CrudAdd);
