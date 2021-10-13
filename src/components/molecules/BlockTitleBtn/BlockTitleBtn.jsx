import React from "react";
import { ListTitle, BtnRemoveList } from "../../atoms";
import "./BlockTitleBtn.css";

const BlockTitleBtn = (props) => {
  return (
    <div className="to-do-list__header">
      <ListTitle />
      <BtnRemoveList id={props.id} removeList={props.removeList} />
    </div>
  );
};

export default BlockTitleBtn;
