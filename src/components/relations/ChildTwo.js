import React, { memo } from "react";

function ChildTwo() {
  console.info("Child Two Rendered ");
  return (
    <div>
      <h1>Child2 Component </h1>
    </div>
  );
}

export default memo(ChildTwo);
