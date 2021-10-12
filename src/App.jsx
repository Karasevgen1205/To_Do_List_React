import { React, useState } from "react";
import { BtnBlock } from "./components/molecules";
import { ToDoList } from "./components/organisms";

const App = () => {
  return (
    <div className="container">
      <div className="container__wrapper">
        <BtnBlock />
        <ToDoList /> 
      </div>
    </div>
  );
};

export default App;
