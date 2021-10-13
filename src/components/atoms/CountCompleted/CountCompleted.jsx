import React from "react";
import "./CountCompleted.css";

const CountCompleted = ({ completed }) => {
  return (
    <p>
      Completed tasks:
      <span className="count-completed">{completed}</span>
    </p>
  );
};

export default CountCompleted;
