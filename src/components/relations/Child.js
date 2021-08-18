import React, { memo } from "react";
import ChildTwo from "./ChildTwo";

export default memo(function Child({ name }) {
  console.log("Child One Rendered");

  return (
    <div>
      <h1>Child1 Component Value</h1>
      <h3>Function call from the parent component</h3>
      {name ? <h1>Your name is {name}</h1> : ""}
      {/* <button onClick={showName.bind(this, null)}>Show Name</button> */}
      <ChildTwo />
    </div>
  );
});
