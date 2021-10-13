import React, { useState } from "react";
import { Input, Button } from "../../atoms";
import "./form.css";

const Form = ({ onCreate }) => {
  const [value, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  };

  const onCh = (event) => {
    setValue(event);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input value={value} onCh={onCh} />
      <Button title={"Publish"} className={"button publish"} type={"submit"} />
    </form>
  );
};

export default Form;
