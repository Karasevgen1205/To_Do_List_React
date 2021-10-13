import React from "react";
import { Counter } from "../../atoms";
import "./BlockCount.css";

const BlockCount = ({ count, active, completed }) => {
  return (
    <div className="count-block">
      <Counter
        title={"Total number of tasks: "}
        className={"counter"}
        count={count}
      />
      <Counter title={"Active tasks: "} className={"counter"} count={active} />
      <Counter
        title={"Completed tasks: "}
        className={"counter"}
        count={completed}
      />
    </div>
  );
};

export default BlockCount;
