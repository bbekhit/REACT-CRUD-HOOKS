import { ADD_NOTE, GET_NOTES, DELETE_NOTE, EDIT_NOTE } from "../actions/types";

const initialState = [];

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case GET_NOTES:
      return action.payload;
    case DELETE_NOTE:
      return state.filter(item => item.id !== action.payload);
    case EDIT_NOTE:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload.data
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
