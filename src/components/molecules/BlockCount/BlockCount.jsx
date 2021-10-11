import React from "react";
import { CountAll, CountActive, CountCompleted } from "../../atoms";

const BlockCount = () => {
    return (
        <div className="count-block">
            <CountAll />
            <CountActive />
            <CountCompleted />
        </div>
    )
}

export default BlockCount;