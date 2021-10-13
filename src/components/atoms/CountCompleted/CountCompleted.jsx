import React from "react";
import "./CountCompleted.css";

const CountCompleted = (props) => {
  return (
    <p>
      Completed tasks:
      <span className="count-completed">{props.completed}</span>
    </p>
  );
};

export default CountCompleted;
