export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addtodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});
export const deletetodo = (id) => ({
  type: DEL_TODO,
  payload: { id },
});
export const updatetodo = (id, newText) => ({
  type: UPDATE_TODO,
  payload: { id, newText },
});
