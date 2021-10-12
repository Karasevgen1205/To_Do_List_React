import React from "react";

const ListItem = (props) => {
  return (
    <li className="item">
      <strong>{props.index}</strong>
      <span>{props.title}</span>
      <button
        className="item-btn run"
        type="button"
        onClick={() => {
          props.toggle(props.todo.id);
        }}
      ></button>
      <i className="item-btn del bi-trash-fill"></i>
    </li>
  );
};

export default ListItem;
