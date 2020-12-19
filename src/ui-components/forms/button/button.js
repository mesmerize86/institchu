import React from 'react';
import ButtonStyle from './button-style'

const Button = ({type, value, handleClickEvent, extraclass}) => {
  return (
    <ButtonStyle type={type || 'submit'} value={ value } onClick={ handleClickEvent } classname={ extraclass }/>
  );
};

export default Button;