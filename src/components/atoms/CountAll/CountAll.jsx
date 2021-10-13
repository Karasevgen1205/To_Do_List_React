import React from "react";

const CountAll = (props) => {
  return (
    <p>
      Total number of tasks: <span className="count-all">{props.count}</span>
    </p>
  );
};

export default CountAll;
