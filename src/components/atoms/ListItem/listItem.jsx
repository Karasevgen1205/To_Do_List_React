import React from "react";
import "./listItem.css";

const ListItem = (props) => {
  let classBtn = "item-btn run ";
  let classTitle = "";
  if (props.todo.completed) {
    classBtn += "done";
    classTitle += "line-through";
  }

  return (
    <li className="item">
      <strong>{props.index}</strong>
      <span className={classTitle}>{props.title}</span>
      <button
        className={classBtn}
        type="button"
        onClick={() => {
          props.toggle(props.todo.id);
        }}
      ></button>
      <i
        className="item-btn del bi-trash-fill"
        onClick={() => {
          props.removeItem(props.todo.id);
        }}
      ></i>
    </li>
  );
};

export default ListItem;
