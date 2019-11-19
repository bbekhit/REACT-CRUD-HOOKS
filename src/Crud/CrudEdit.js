import React from "react";
import CrudForm from "./CrudForm";
import { connect } from "react-redux";
import { editNote } from "../actions/crudActions";

const CrudEdit = ({ note, editNote, history }) => {
  const onSubmit = data => {
    let notesData = JSON.parse(localStorage.getItem("notes"));
    notesData = notesData.map(item =>
      item.id === note.id ? (item = data) : item
    );
    localStorage.setItem("notes", JSON.stringify(notesData));
    editNote(note.id, data);
    history.push("/");
  };
  return (
    <div>
      <CrudForm note={note} onSubmit={data => onSubmit(data)} />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  note: state.notes.find(item => item.id === props.match.params.id)
});

export default connect(mapStateToProps, { editNote })(CrudEdit);
