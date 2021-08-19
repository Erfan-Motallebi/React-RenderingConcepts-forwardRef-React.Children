import "./App.css";
import React from "react";
import GrandPa from "./components/Ancesters/GrandPa";
import ParentOne from "./components/Ancesters/ParentOne";
import ChildOne from "./components/Ancesters/ChildOne";
// import UseRef from "./components/codeSplitting/UseRef";
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
      {/* <UseRef /> */}
      <GrandPa />
      {/* <GrandPa>
        <ParentOne>
          <ChildOne />
        </ParentOne>
      </GrandPa> */}
    </div>
  );
}

export default App;
