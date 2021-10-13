import React from "react";

const CountCompleted = (props) => {
  return (
    <p>
      Completed tasks:
      <span className="count-completed">{props.completed}</span>
    </p>
  );
};

export default CountCompleted;
