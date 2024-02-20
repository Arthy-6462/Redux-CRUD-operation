import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, deletetodo, updatetodo } from "./action";
import { useState } from "react";

const Userdetailtodo = () => {
  const [list, setlist] = useState("");

  const [listid, setListid] = useState(""); // New state to hold the id of the todo item being updated

  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAdd = (list) => {
    // If listid is truthy, update the todo item
    if (listid) {
      dispatch(updatetodo(listid, list));

      setListid(""); // Clear listid after updating the todo item
    } else {
      // Otherwise, add a new todo item

      dispatch(addtodo(list));
    }
    setlist(""); // Clear the input field after adding or updating a todo item
  };
  const handleDelete = (id) => {
    dispatch(deletetodo(id));
  };
  const handleUpdate = (id, text) => {
    setlist(text);
    setListid(id);
  };
  return (
    <div>
      <h1>Todolist</h1>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleUpdate(item.id, item.text)}>
              Update
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={list}
        onChange={(e) => setlist(e.target.value)}
      />
      <button onClick={() => handleAdd(list)}>
        {listid ? "Update" : "Add"}
      </button>
      {/* <input
        type="text"
        value={update}
        onChange={(e) => setupdate(e.target.value)}
      /> */}
    </div>
  );
};

export default Userdetailtodo;
