import React, { createContext, useState } from "react";
import ContextChild from "./ContextChild";

export const parentContext = createContext({
  count: 0,
});
parentContext.displayName = "ParnetContext";
const AppProvider = parentContext.Provider;

function ParentContext() {
  console.log("ParnetContext Rendered");
  const [count, setCount] = useState(0);
  return (
    <div className="Parnet-Container">
      <h2>Upvote the COUNT please {count} </h2>
      <button onClick={setCount.bind(this, count + 1)}>Inc.</button>
      <AppProvider value={{ count }}>
        <ContextChild />
      </AppProvider>
    </div>
  );
}

export default ParentContext;
