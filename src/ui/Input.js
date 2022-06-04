import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <input
      className={`all_input ${props.className}`}
      type={props.type}
      min={props.min}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      step={props.step}
      required
    />
  );
};
export default Input;
