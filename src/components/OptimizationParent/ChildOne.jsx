import { useState } from "react";

export default function ChildOne() {
  const [value, setValue] = useState("");
  console.log("ChildOne Rendered");
  return (
    <div>
      <h3>Child One Component</h3>
      <h4>{value}</h4>
      <button onClick={setValue.bind(this, "Erika")}>Change</button>
    </div>
  );
}
