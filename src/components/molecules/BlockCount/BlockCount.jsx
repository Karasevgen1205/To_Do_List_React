import React from "react";
import { CountAll, CountActive, CountCompleted } from "../../atoms";

const BlockCount = (props) => {
  return (
    <div className="count-block">
      <CountAll count={props.count} />
      <CountActive active={props.active} />
      <CountCompleted completed={props.completed} />
    </div>
  );
};

export default BlockCount;
