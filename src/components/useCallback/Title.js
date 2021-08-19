import React from "react";

function Title() {
  console.log("Title Rendered");
  return (
    <div>
      <h1>React Rendering</h1>
    </div>
  );
}

export default React.memo(Title);
