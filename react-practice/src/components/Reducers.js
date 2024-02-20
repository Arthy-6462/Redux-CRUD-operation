import React from "react";
import { useReducer } from "react";

const transReducer = (state, action) => {
  switch (action.type) {
    case "WITHDRAW":
      return state - action.payload;
    case "DEPOSIT":
      return state + action.payload;
    default:
      return state;
  }
};
export default function Reducers() {
  const [state, dispatch] = useReducer(transReducer, 5000);
  const withdraw = (amount) => {
    dispatch({ type: "WITHDRAW", payload: amount });
  };
  const deposit = (amount) => {
    dispatch({ type: "DEPOSIT", payload: amount });
  };
  return (
    <div>
      <h1>{`Balance is ${state}`}</h1>
      <button onClick={() => withdraw(500)}>withdraw</button>
      <button onClick={() => deposit(500)}>deposit</button>
    </div>
  );
}
