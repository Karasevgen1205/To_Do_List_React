import React from "react";
import "./Button.css";

const Button = ({ className, type, onClick, title }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
