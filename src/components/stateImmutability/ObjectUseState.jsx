import { useState } from "react";

function ObjectUseState() {
  console.info("Rendered");
  const [value, setValue] = useState({
    name: "Erfan",
    lastname: "Motallebi",
  });

  const handleName = () => {
    console.log("inside the function");
    const oldValues = { ...value };
    oldValues.name = "Erika";
    oldValues.lastname = "Keddick";
    oldValues.length = 2;
    setValue(oldValues);
  };

  return (
    <div>
      <button onClick={handleName}>Change</button>
      <pre>
        <em>{value.name}</em>
        <br />
        <em>{value.lastname}</em>
      </pre>
    </div>
  );
}

export default ObjectUseState;
