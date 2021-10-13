import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <input
      className="input"
      value={props.value}
      type="text"
      placeholder="Enter to do item"
      onChange={(event) => {
        props.onCh(event.target.value);
      }}
    />
  );
};

export default Input;
