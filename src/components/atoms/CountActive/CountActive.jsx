import React from "react";
import "./CountActive.css";

const CountActive = ({ active }) => {
  return (
    <p>
      Active tasks: <span className="count-active">{active}</span>
    </p>
  );
};

export default CountActive;
