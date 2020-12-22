import React from 'react';
import Card from '../card/card';
import { Header, NewUser } from './user-profile-style';

const CreateNewUserUi = ({openNewUserProfileForm}) => {
  return (
    <Card>
      <NewUser onClick={openNewUserProfileForm}>
        <img src='/plus-icon-color.png' className="plus-icon" alt="plus icon"/>
        <Header>Create New</Header>
      </NewUser>
    </Card>
  );
};

export default CreateNewUserUi;