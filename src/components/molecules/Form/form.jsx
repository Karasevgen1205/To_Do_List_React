import React, { useState } from "react";
import { Input, Button } from "../../atoms";
import "./form.css";

const Form = ({ onCreate }) => {
  const [value, setValue] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  };

  const handlerChenge = (event) => {
    setValue(event);
  };

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <Input value={value} onChenge={handlerChenge} />
      <Button title={"Publish"} className={"button publish"} type={"submit"} />
    </form>
  );
};

export default Form;
