import React from "react";
import "./Input.css";

const Input = ({ value, onCh }) => {
  return (
    <input
      className="input"
      value={value}
      type="text"
      placeholder="Enter to do item"
      onChange={(event) => {
        onCh(event.target.value);
      }}
    />
  );
};

export default Input;
