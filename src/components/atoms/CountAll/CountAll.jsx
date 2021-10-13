import React from "react";
import "./CountAll.css";

const CountAll = ({ count }) => {
  return (
    <p>
      Total number of tasks: <span className="count-all">{count}</span>
    </p>
  );
};

export default CountAll;
