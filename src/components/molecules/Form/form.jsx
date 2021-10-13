import React, { useState } from "react";
import { Input, Button } from "../../atoms";
import "./form.css";

const Form = ({ onCreate }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  };

  const handleChenge = (event) => {
    setValue(event);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input value={value} onChenge={handleChenge} />
      <Button title={"Publish"} className={"button publish"} type={"submit"} />
    </form>
  );
};

export default Form;
