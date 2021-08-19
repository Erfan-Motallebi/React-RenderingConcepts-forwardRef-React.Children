import React, { useState } from "react";
import ParentOne from "./ParentOne";
import ChildOne from "./ChildOne";

function GrandPa() {
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(0);
  console.info("GrandParent Rendered");
  return (
    <div style={{ border: "2px solid lightblue" }}>
      <h1>Grand Parent</h1>
      <h4>{count}</h4>
      <h3>GrandPa CountDown : {countDown}</h3>
      <button onClick={setCountDown.bind(null, countDown - 1)}>
        voteDown
      </button>{" "}
      <br />
      <button onClick={() => setCount((c) => c + 1)}>voteUp</button>
      <ParentOne count={count}>
        <ChildOne />
      </ParentOne>
      {/* {props.children} */}
    </div>
  );
}

export default GrandPa;
