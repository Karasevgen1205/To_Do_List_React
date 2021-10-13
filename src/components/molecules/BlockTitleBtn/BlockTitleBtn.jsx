import React from "react";
import { ListTitle, Button } from "../../atoms";
import "./BlockTitleBtn.css";

const BlockTitleBtn = ({ id, onRemoveList }) => {
  return (
    <div className="to-do-list__header">
      <ListTitle />
      <Button
        className={"btn-remove-list"}
        type={"button"}
        onClick={() => {
          onRemoveList(id);
        }}
        title={"Remove This List"}
      />
    </div>
  );
};

export default BlockTitleBtn;
