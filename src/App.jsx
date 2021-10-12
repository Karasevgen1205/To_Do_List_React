import { React, useState } from "react";
import { BtnRemoveList, Link, ListTitle, ListItem } from "./components/atoms";
import {
  BtnBlock,
  List,
  BlockTitleBtn,
  Form,
  BlockCount,
} from "./components/molecules";
import { ToDoList } from "./components/organisms";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Learn JS" },
    { id: 2, completed: false, title: "Learn React" },
    { id: 3, completed: false, title: "Learn Redux" },
  ]);

  function toggle(id) {
    setTodos(
      todos.map((item, i) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
    // console.log(todos);
  }

  return (
    <div className="container">
      <div className="container__wrapper">
        <BtnBlock />
        <ToDoList todos={todos} toggle={toggle} />
      </div>
    </div>
  );
};

export default App;
