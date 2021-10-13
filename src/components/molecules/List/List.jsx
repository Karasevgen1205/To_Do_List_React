import React from "react";
import { ListItem } from "../../atoms";
import "./List.css";

const List = ({ todos, toggle, removeItem }) => {
  return (
    <ul className="list">
      {todos.map((todo, i) => {
        return (
          <ListItem
            todo={todo}
            title={todo.title}
            index={i + 1}
            key={todo.id}
            toggle={toggle}
            removeItem={removeItem}
          />
        );
      })}
    </ul>
  );
};

export default List;
