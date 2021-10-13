import React, { useState } from "react";
import { BtnBlock } from "../molecules";
import { ToDoList } from "../organisms";
import "./App.css";

const App = () => {
  const [countList, setCountList] = useState([Date.now()]);

  const handleAddNewList = () => {
    setCountList(countList.concat([Date.now()]));
  };

  const handleRemoveList = (id) => {
    setCountList(countList.filter((item) => item !== id));
  };

  return (
    <div className="container">
      <div className="container__wrapper">
        <BtnBlock onAddNewList={handleAddNewList} />
        {countList.map((item) => {
          return (
            <ToDoList id={item} key={item} onRemoveList={handleRemoveList} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
