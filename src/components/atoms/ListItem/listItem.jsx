import React from "react";
import "./listItem.css";

const ListItem = ({ todo, title, index, onToggle, onRemoveItem }) => {
  let classBtn = "item-btn run ";
  let classTitle = "";
  if (todo.completed) {
    classBtn += "done";
    classTitle += "line-through";
  }

  return (
    <li className="item">
      <strong>{index}</strong>
      <span className={classTitle}>{title}</span>
      <button
        className={classBtn}
        type="button"
        onClick={() => {
          onToggle(todo.id);
        }}
      ></button>
      <i
        className="item-btn del bi-trash-fill"
        onClick={() => {
          onRemoveItem(todo.id);
        }}
      ></i>
    </li>
  );
};

export default ListItem;
