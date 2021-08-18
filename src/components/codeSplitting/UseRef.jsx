import React, { useEffect, useRef } from "react";
import Input from "./Input";

const Mathematics = () => {
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    firstRef.current.focus();
  }, []);

  const onkeyUpFirst = (e) => {
    if (e.key === "Enter") {
      console.log({ keyup: e });
      lastRef.current.focus();
    }
  };

  const onKeyUpLast = (e) => {
    if (e.code === "NumpadEnter") {
      console.log({ keyUp: e });
      buttonRef.current.focus();
    }
  };

  const onButton = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <Input
          placeholder="your firstname"
          type="text"
          name="firstname"
          ref={firstRef}
          id="firstname"
          onKeyUp={onkeyUpFirst}
        />
        <br /> <br />
        <Input
          type="text"
          name="lastname"
          placeholder="your lastname"
          id="lastname"
          ref={lastRef}
          onKeyUp={onKeyUpLast}
        />{" "}
        <br /> <br />
        <button ref={buttonRef} type="submit" onClick={onButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Mathematics;
