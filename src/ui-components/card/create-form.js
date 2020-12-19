import React from 'react';
import {CardStyle, Header} from "./card-style";

const CreateForm = ({ handleNewProfile }) => {
  return (
    <CardStyle className="card-new" onClick={ handleNewProfile}>
      <img src='/plus-icon-color.png' className="plus-icon" alt="plus icon"/>
      <Header>Create New</Header>
    </CardStyle>
  );
};

export default CreateForm;