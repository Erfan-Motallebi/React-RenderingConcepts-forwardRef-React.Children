import React, { useState } from "react";

export default function UseState() {
  const [count0, setCount0] = useState(0);
  const [count5, setCount5] = useState(5);
  const [count, setCount] = useState(0);
  console.info("useState Rendered");
  return (
    <div>
      <button onClick={setCount.bind(this, count + 1)}>
        Count {""}
        {count}
      </button>
      <button onClick={() => setCount0(0)}>
        Count {""}
        {count0}
      </button>
      <button onClick={() => setCount5(5)}>
        Count {""}
        {count5}
      </button>
    </div>
  );
}
