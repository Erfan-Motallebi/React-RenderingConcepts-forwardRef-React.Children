import React, { useReducer } from "react";

const initializer = {
  count: 0,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "ADD":
      console.log("Add Rendered");
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    case "MINUS":
      console.log("Minus Rendered");
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    case "RESET":
      console.log("Reset Rendered");
      return {
        ...prevState,
        count: 0,
      };
    default:
      return prevState;
  }
};

export default function UseReducer() {
  console.info("Initial Rendering");
  const [state, dispatch] = useReducer(reducer, initializer);
  return (
    <div>
      <h1>useReducer</h1>
      <h1>{state.count}</h1>
      <button onClick={dispatch.bind(this, { type: "ADD" })}>add</button>{" "}
      <button onClick={() => dispatch({ type: "MINUS", payload: 1 })}>
        subtract
      </button>
      <button onClick={dispatch.bind(this, { type: "RESET" })}>RESET</button>
    </div>
  );
}
