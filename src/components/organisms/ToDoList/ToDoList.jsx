import React, { useState } from "react";
import { BlockTitleBtn, Form, BlockCount, List } from "../../molecules";

const ToDoList = (props) => {
  // const [count, setCount] = useState(0);
  // const [f, setF] = useState(55);

  // function increment() {
  //     setCount(count + 10);
  //     setF(f + 1)
  // }

  // function decrement() {
  //     setCount(count - 10);
  //     setF(f - 1)
  // }

  // const [todos, setTodos] = useState([
  //     {id: 1, title: 'Hello', completed: true},
  //     {id: 2, title: 'Fucking', completed: true},
  // ])

  // const [todos, setTodos] = useState('');

  // const addTodo = event => {
  //     if(event.key === "Enter") {

  //     }
  // }

  return (
    <div className="container">
      <div className="container__wrapper">
        <BlockTitleBtn />
        <Form onCreate={props.onCreate}/>
        { props.todos.length 
        ? <List todos={props.todos} toggle={props.toggle} removeItem={props.removeItem}/>
        : <h2>Nothing to do</h2>}
        <BlockCount />
        {/* <p>{count}</p> */}
        {/* <p>{f}</p> */}
        {/* <button onClick={increment}>Click</button> */}
        {/* <button onClick={decrement}>Click</button> */}
      </div>
    </div>
  );
};

export default ToDoList;
