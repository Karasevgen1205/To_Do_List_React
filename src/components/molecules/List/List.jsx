import React from "react";
import { ListItem } from "../../atoms";

const List = (props) => {
  return (
    <ul className="list">
      {props.todos.map((todo, i) => {
        return (
          <ListItem
            todo={todo}
            title={todo.title}
            index={i + 1}
            key={todo.id}
            toggle={props.toggle}
          />
        );
      })}
    </ul>
  );
};

export default List;
