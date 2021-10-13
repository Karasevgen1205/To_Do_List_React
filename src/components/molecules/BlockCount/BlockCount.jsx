import React from "react";
import { CountAll, CountActive, CountCompleted } from "../../atoms";
import "./BlockCount.css";

const BlockCount = ({ count, active, completed }) => {
  return (
    <div className="count-block">
      <CountAll count={count} />
      <CountActive active={active} />
      <CountCompleted completed={completed} />
    </div>
  );
};

export default BlockCount;
