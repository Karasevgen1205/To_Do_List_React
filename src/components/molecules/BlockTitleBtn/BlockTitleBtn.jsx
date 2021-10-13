import React from "react";
import { ListTitle, Button } from "../../atoms";
import "./BlockTitleBtn.css";

const BlockTitleBtn = ({ id, removeList }) => {
  return (
    <div className="to-do-list__header">
      <ListTitle />
      <Button
        className={"btn-remove-list"}
        type={"button"}
        onClick={() => {
          removeList(id);
        }}
        title={"Remove This List"}
      />
    </div>
  );
};

export default BlockTitleBtn;
