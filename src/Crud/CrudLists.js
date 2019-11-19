import React, { useState, useEffect } from "react";
import CrudItem from "./CrudItem";
import { connect } from "react-redux";
import { getNotes } from "../actions/crudActions";

const CrudLists = ({ notes, getNotes }) => {
  useEffect(() => {
    let notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      getNotes(notesData);
    }
  }, []); // runs only once when component did mount

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]); // runs only when 'notes' changes

  return (
    <div>
      {notes.map(item => (
        <CrudItem note={item} key={item.id} />
      ))}
    </div>
  );
};
const mapStateToProps = state => ({
  notes: state.notes
});
export default connect(mapStateToProps, { getNotes })(CrudLists);
