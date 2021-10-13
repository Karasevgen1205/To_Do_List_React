import React from "react";

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
