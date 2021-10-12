import React, { useState } from "react";
import { BlockTitleBtn, Form, BlockCount, List } from "../../molecules";

const ToDoList = (props) => {
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
        <BlockTitleBtn />
        <Form onCreate={onCreate}/>
        { todos.length 
        ? <List todos={todos} toggle={toggle} removeItem={removeItem}/>
        : <h2>Nothing to do</h2>}
        <BlockCount />
      </div>
    </div>
  );
};

export default ToDoList;
