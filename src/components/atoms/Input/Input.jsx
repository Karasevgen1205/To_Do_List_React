import React from "react";
import "./Input.css";

const Input = ({ value, onChenge }) => {
  return (
    <input
      className="input"
      value={value}
      type="text"
      placeholder="Enter to do item"
      onChange={(event) => {
        onChenge(event.target.value);
      }}
    />
  );
};

export default Input;
