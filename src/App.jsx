import React from 'react';
import {BtnRemoveList, Link, ListTitle, ListItem} from "./components/atoms";
import { BtnBlock, List, BlockTitleBtn, Form, BlockCount } from './components/molecules';
import {ToDoList} from "./components/organisms";

const App = () => {
    return (
        <div className="container">
            <div className="container__wrapper">
                <BtnBlock/>
                <ToDoList/>
                <List />
            </div>
        </div>
    )
}

export default App;