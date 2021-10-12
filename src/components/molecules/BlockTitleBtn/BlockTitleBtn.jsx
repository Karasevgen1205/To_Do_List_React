import React from "react";
import { ListTitle, BtnRemoveList } from "../../atoms";

const BlockTitleBtn = () => {
  return (
    <div className="to-do-list__header">
      <ListTitle />
      <BtnRemoveList />
    </div>
  );
};

export default BlockTitleBtn;
