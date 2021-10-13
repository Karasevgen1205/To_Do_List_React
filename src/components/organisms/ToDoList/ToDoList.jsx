import React, { useState } from "react";
import { BlockTitleBtn, Form, BlockCount, List } from "../../molecules";
import "./ToDoList.css";

const ToDoList = ({ id, onRemoveList }) => {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Learn JS" },
    { id: 2, completed: false, title: "Learn React" },
    { id: 3, completed: false, title: "Learn Redux" },
  ]);

  let [activeToDoCount, setActiveToDoCount] = useState(todos.length);
  let [completedToDoCount, setCompletedToDoCount] = useState(0);

  const handleToggle = (id) => {
    todos.map((item) => {
      if (item.id === id && item.completed === false) {
        setActiveToDoCount(activeToDoCount - 1);
        setCompletedToDoCount(completedToDoCount + 1);
      } else if (item.id === id && item.completed === true) {
        setActiveToDoCount(activeToDoCount + 1);
        setCompletedToDoCount(completedToDoCount - 1);
      }
    });
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id) => {
    todos.map((item) => {
      if (item.id === id && item.completed === false) {
        setActiveToDoCount(activeToDoCount - 1);
      } else if (item.id === id && item.completed === true) {
        setCompletedToDoCount(completedToDoCount - 1);
      }
    });
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleCreate = (value) => {
    setTodos(
      todos.concat([{ id: Date.now(), completed: false, title: value }])
    );
    setActiveToDoCount(activeToDoCount + 1);
  };

  return (
    <div className="container">
      <div className="to-do-list">
        <BlockTitleBtn id={id} onRemoveList={onRemoveList} />
        <Form onCreate={handleCreate} />
        {todos.length ? (
          <List
            todos={todos}
            onToggle={handleToggle}
            onRemoveItem={handleRemoveItem}
          />
        ) : (
          <h2>Nothing to do</h2>
        )}
        <BlockCount
          count={todos.length}
          active={activeToDoCount}
          completed={completedToDoCount}
        />
      </div>
    </div>
  );
};

export default ToDoList;
