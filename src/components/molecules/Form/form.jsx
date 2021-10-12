import {React, useState} from "react";
import { Input, BtnPublish } from "../../atoms";

const Form = ({onCreate}) => {

  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    if(value.trim()) {
      onCreate(value);
      setValue('');
    }
  }

  function onCh(event) {
    setValue(event)
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input value={value} onCh={onCh}/>
      <BtnPublish />
    </form>
  );
};

export default Form;
