import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div>
      <input
        type="text"
        name={props.name}
        id={props.id}
        ref={ref}
        placeholder={props.placeholder}
        onKeyUp={props.onKeyUp}
      />
    </div>
  );
});
export default Input;
