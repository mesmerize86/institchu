import React, { useState } from 'react';
import classnames from 'classnames';
import { FloatingLabelStyle } from "./floating-label-style";

const FloatingLabel = ({ htmlFor, register, name, field}) => {
  const [inputHasContent, setInputHasContent] = useState();

  /**
   * handle on change
   * @param e
   */
  const handleChange = (e)=> {
    (e.target.value.length > 0) ? setInputHasContent(true) : setInputHasContent(false)
  }

  return (
    <FloatingLabelStyle>
      <input
        type="text"
        id={ htmlFor }
        name = { name }
        onChange={ handleChange }
        className={classnames({'input-has-content': inputHasContent})}
        ref = { register}
        />
      <label htmlFor={ htmlFor }>
        <span className="floating-label-text">{field}</span>
      </label>
    </FloatingLabelStyle>
  );
};

export default FloatingLabel;