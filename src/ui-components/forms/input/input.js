import React from 'react';
import { InputStyle } from "./inputStyle";

const Input = ({ value, isDisabled = false, register, name, field }) => {
  return (
      <InputStyle type="text" name={name} defaultValue={ value } disabled={ isDisabled } ref={ register } placeholder={field}/>
  );
};

export default Input;