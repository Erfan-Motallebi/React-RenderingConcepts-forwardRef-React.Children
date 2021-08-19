import "./App.css";
import React from "react";
import ParentContext from "./components/useContext/ParentContext";
// import Computation from "./components/useMemo/Computation";
// import MainComputation from "./components/useCallback/MainComputation";
// import GrandPa from "./components/Ancesters/GrandPa";
// import ParentOne from "./components/Ancesters/ParentOne";
// import ChildOne from "./components/Ancesters/ChildOne";
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
      <ParentContext />
    </div>
  );
}

export default App;
