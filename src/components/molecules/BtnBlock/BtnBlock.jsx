import React from "react";
import { Button } from "../../atoms";
import "./BtnBlock.css";

const BtnBlock = ({ addNewList }) => {
  return (
    <div className="block-btn">
      <Button
        className={"btn-add-new-list"}
        type={"button"}
        onClick={addNewList}
        title={"Add new List"}
      />
    </div>
  );
};

export default BtnBlock;
