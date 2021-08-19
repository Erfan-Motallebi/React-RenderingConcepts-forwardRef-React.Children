import React from "react";

const Age = ({ name, age }) => {
  console.info("Age Rendered");
  return (
    <div>
      <h3>Age: {age}</h3>
    </div>
  );
};

export default React.memo(Age);
