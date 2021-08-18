import "./App.css";
import React from "react";
import UseRef from "./components/codeSplitting/UseRef";
// import ParentOne from "./components/OptimizationParent/ParentOne";
// import ChildOne from "./components/OptimizationParent/ChildOne";
// import ChildTwo from "./components/OptimizationParent/ChildTwo";
// import Parent from "./components/relations/Parent";
// import ObjectUseState from "./components/ObjectUseState";
// import UseReducer from "./components/UseReducer";
// import UseState from "./components/UseState";

function App() {
  // const mathRef = React.createRef();

  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <Parent /> */}
      {/* <ParentOne>
        <ChildOne />
        <ChildTwo />
      </ParentOne> */}
      <UseRef />
    </div>
  );
}

export default App;
