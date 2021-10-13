import React from "react";
import "./CountAll.css";

const CountAll = (props) => {
  return (
    <p>
      Total number of tasks: <span className="count-all">{props.count}</span>
    </p>
  );
};

export default CountAll;
