import React from "react";
import "./BtnNewList.css";

const BtnNewList = (props) => {
  return (
    <button
      className="btn-add-new-list"
      type="button"
      onClick={props.addNewList}
    >
      Add new List
    </button>
  );
};

export default BtnNewList;
