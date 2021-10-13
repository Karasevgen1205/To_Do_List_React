import React, { useState } from "react";
import { BtnBlock } from "../molecules";
import { ToDoList } from "../organisms";
import "./App.css";

const App = () => {
  const [countList, setCountList] = useState([Date.now()]);

  const addNewList = () => {
    setCountList(countList.concat([Date.now()]));
  };

  const removeList = (id) => {
    setCountList(countList.filter((item) => item !== id));
  };

  return (
    <div className="container">
      <div className="container__wrapper">
        <BtnBlock addNewList={addNewList} />
        {countList.map((item) => {
          return <ToDoList id={item} key={item} removeList={removeList} />;
        })}
      </div>
    </div>
  );
};

export default App;
