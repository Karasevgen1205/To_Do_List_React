import { React, useState } from "react";
import { BtnBlock } from "./components/molecules";
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
  }

  function removeItem(id) {
    setTodos(
      todos.filter(item => item.id !== id)
      )
  }

  function onCreate(value) {
    setTodos(todos.concat([
      { id: Date.now(), completed: false, title: value }
    ]));
  }

  return (
    <div className="container">
      <div className="container__wrapper">
        <BtnBlock />
        <ToDoList todos={todos} toggle={toggle} removeItem={removeItem} onCreate={onCreate}/> 
      </div>
    </div>
  );
};

export default App;
