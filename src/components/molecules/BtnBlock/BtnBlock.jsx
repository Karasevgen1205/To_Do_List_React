import React from "react";
import { Button } from "../../atoms";
import "./BtnBlock.css";

const BtnBlock = ({ onAddNewList }) => {
  return (
    <div className="block-btn">
      <Button
        className={"btn-add-new-list"}
        type={"button"}
        onClick={onAddNewList}
        title={"Add new List"}
      />
    </div>
  );
};

export default BtnBlock;
