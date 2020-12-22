import React from 'react';
import { InputStyle } from "./inputStyle";

const Input = ({ type, value, isDisabled = false, register, name, field }) => {
  return (
      <InputStyle type={type || "text"} name={name} defaultValue={ value } disabled={ isDisabled } ref={ register } placeholder={field}/>
  );
};

export default Input;