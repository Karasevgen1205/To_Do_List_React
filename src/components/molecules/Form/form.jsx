import {React, useState} from "react";
// import { Input, BtnPublish } from "../../atoms";

const Form = ({onCreate}) => {

  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    if(value.trim()) {
      onCreate(value);
      setValue('');
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <input 
      className="input" 
      value={value} 
      type="text" 
      placeholder="Enter to do item" 
      onChange={event => setValue(event.target.value)}></input>
      <button className="button publish" type="submit">
        Publish
      </button>
      {/* <Input /> */}
      {/* <BtnPublish /> */}
    </form>
  );
};

export default Form;
