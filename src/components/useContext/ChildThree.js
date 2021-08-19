import React, { useContext } from "react";
import { parentContext } from "./ParentContext";
function ChildThree() {
  const { count } = useContext(parentContext);
  console.log("ChildThree Rendered");
  return (
    <div>
      <h1>Child Three Component</h1>
      <h3>Count form ur Parent Component is : {count}</h3>
    </div>
  );
}

export default ChildThree;
