import React, { Children, memo } from "react";
// import ChildOne from "./ChildOne";

function ParentOne({ count, children }) {
  console.log("Parent One Rendered");
  return (
    <div style={{ border: "1px solid gray", margin: 20 }}>
      <h2>From GrandPa : {count} </h2>
      <h2>Parent One</h2>
      <div>{Children.only(children)}</div>
    </div>
  );
}

export default memo(ParentOne);
