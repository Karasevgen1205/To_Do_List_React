import React from "react";
import { BlockTitleBtn, Form, BlockCount } from "../../molecules"

const ToDoList = () => {
    return (
        <div className="container">
            <div className="container__wrapper">
                <BlockTitleBtn />
                <Form />
                <BlockCount />
            </div>
        </div>
    )
}

export default ToDoList;