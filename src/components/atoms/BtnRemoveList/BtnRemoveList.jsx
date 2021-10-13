import React from "react";
import "./BtnRemoveList.css";

const BtnRemoveList = (props) => {
  return (
    <button
      className="btn-remove-list"
      type="button"
      onClick={() => {
        props.removeList(props.id);
      }}
    >
      Remove This List
    </button>
  );
};

export default BtnRemoveList;
