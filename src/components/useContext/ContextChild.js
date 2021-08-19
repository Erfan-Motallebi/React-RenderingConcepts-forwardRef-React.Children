import React from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import ChildThree from "./ChildThree";

function ContextChild() {
  return (
    <div className="child-Container">
      <div>
        <ChildOne />
      </div>
      <div>
        <ChildTwo />
      </div>
      <div>
        <ChildThree />
      </div>
    </div>
  );
}

export default React.memo(ContextChild);
