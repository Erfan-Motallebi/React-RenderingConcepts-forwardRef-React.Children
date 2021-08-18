import { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("Parent Rendered");
  const [value, setValue] = useState(0);
  const [name, setName] = useState("Erik");
  //   const showName = () => {
  //     console.log("Function Inside");
  //     setName("Erik");
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   };

  const showName = useCallback(() => {
    console.log("Function Inside");
    setName("Erikaa");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setValue((c) => c + 1)}>Count {value}</button>
      <button onClick={() => setValue(0)}>Count {value} </button>
      <button onClick={() => setValue(5)}>Count 5 {value} </button>
      <button onClick={showName.bind(this, null)}>Show Name</button>
      <Child name={name} />
    </div>
  );
}

export default Parent;
