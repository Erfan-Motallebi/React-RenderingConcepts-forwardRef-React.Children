import React from "react";

function Salary({ salary }) {
  console.info("Salary Rendered");
  return (
    <div>
      <h3>Salary is : {salary}</h3>
    </div>
  );
}

export default React.memo(Salary);
