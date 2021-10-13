import React from "react";
import { BtnNewList } from "../../atoms";

const BtnBlock = (props) => {
  return (
    <div className="block-btn">
      <BtnNewList addNewList={props.addNewList}/>
    </div>
  );
};

export default BtnBlock;
