import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteNote } from "../actions/crudActions";
import { Link } from "react-router-dom";
export const CrudItem = ({ note, deleteNote }) => {
  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteNote(id);
  };
  return (
    <div className="formWrapper">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button>
        <Link to={`/${note.id}`}>Edit</Link>
      </button>
      <button onClick={e => handleDelete(e, note.id)}>Delete</button>
    </div>
  );
};

export default connect(null, { deleteNote })(CrudItem);
