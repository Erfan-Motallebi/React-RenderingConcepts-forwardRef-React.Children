import React, { Fragment, useCallback, useState } from "react";
import Title from "./Title";
import Age from "./Age";
import Button from "./Button";
import Salary from "./Salary";

function MainComputation() {
  console.info("MainComputation Rendered");

  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(4500);

  const incraseAge = useCallback(() => {
    setAge((prevAge) => prevAge + 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age]);

  const increaseSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salary]);

  return (
    <Fragment>
      <Title />
      <Age age={age} />
      <Button name="age" handleClick={incraseAge} />
      <Salary salary={salary} />
      <Button name="salary" handleClick={increaseSalary} />
    </Fragment>
  );
}

export default MainComputation;
