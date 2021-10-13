import { React, useState } from "react";
import { BtnBlock } from "./components/molecules";
import { ToDoList } from "./components/organisms";

const App = () => {
  const [countList, setCountList] = useState([Date.now()]);

  function addNewList() {
    setCountList(countList.concat([Date.now()]));
  }

  function removeList(id) {
    setCountList(countList.filter((item) => item !== id));
  }

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
