import React from 'react';
import {BtnRemoveList, Link, ListTitle} from "./components/atoms";
import { BtnBlock, BlockTitleBtn, Form, BlockCount } from './components/molecules';
import {ToDoList} from "./components/organisms";

const App = () => {
    return (
        <div className="container">
            <div className="container__wrapper">
                <BtnBlock/>
                <ToDoList/>
            </div>
        </div>
    )
}

export default App;