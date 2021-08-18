import React, { Children, useState, Fragment } from "react";
// import ChildOne from "./ChildOne";

function ParentOne({ children }) {
  const [value, setValue] = useState(0);
  console.log("ParentOne Rendered");

  return (
    <div>
      <Fragment key="1">
        <h1>ParentOne Component</h1>
        <h2>{value}</h2>
      </Fragment>
      <button aria-label="button" onClick={setValue.bind(this, value + 1)}>
        Change
      </button>
      {/* {Children.map(children, (child) => {
        console.log(child);
        return child;
      })} */}
      {Children.map(children, (child) => {
        return child;
      })}
    </div>
  );
}

export default ParentOne;
