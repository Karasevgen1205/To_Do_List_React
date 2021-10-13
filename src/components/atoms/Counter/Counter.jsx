import React from "react";
import "./Counter.css";

const Counter = ({ title, count, className }) => {
  return (
    <p>
      {title}
      <span className={className}>{count}</span>
    </p>
  );
};

export default Counter;
