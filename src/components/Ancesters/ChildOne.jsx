import React from "react";
function ChildOne() {
  console.log("Child One Rendered");
  return (
    <div style={{ border: "3px purple groove", margin: 10 }}>
      <h3>Child One</h3>
    </div>
  );
}

export default React.memo(ChildOne);
