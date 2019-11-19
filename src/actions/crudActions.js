import { ADD_NOTE, GET_NOTES, DELETE_NOTE, EDIT_NOTE } from "./types";

export const addNote = data => {
  return {
    type: ADD_NOTE,
    payload: data
  };
};

export const getNotes = data => {
  return {
    type: GET_NOTES,
    payload: data
  };
};

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id
  };
};

export const editNote = (id, data) => {
  return {
    type: EDIT_NOTE,
    payload: { id, data }
  };
};
