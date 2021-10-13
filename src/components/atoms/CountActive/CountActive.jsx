import React from "react";

const CountActive = (props) => {
  return (
    <p>
      Active tasks: <span className="count-active">{props.active}</span>
    </p>
  );
};

export default CountActive;
