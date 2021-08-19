import React, { useState, useMemo } from "react";
import ChildFactory from "./ChildFactory";

function Computation() {
  console.log("Computation Rendered");

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const isOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return countOne % 2 !== 0;
  }, [countOne]);

  // HINT:  Objects make new reference at every render
  const factoryInfo = {
    name: "Code Factory",
    expireTime: 2024,
    dateOfBirth: 1878,
    owner: "Erfan",
  };
  const memoizedFactoryInfo = useMemo(() => factoryInfo, []);

  return (
    <div>
      <button
        style={{ color: "purple" }}
        onClick={() => setCountOne((cOne) => cOne + 1)}
      >
        Count One {countOne}
      </button>{" "}
      Count State : {isOdd ? "Odd Number" : "Even Number"}
      <br /> <br />
      <button
        style={{ color: "green" }}
        onClick={() => setCountTwo((cTwo) => cTwo + 1)}
      >
        Count Two {countTwo}
      </button>{" "}
      <br /> <br />
      <ChildFactory factoryInfo={memoizedFactoryInfo} />
    </div>
  );
}

export default Computation;
