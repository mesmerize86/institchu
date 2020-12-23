import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";

/* styling */
import { UserProfileStyle } from './user-profile-style';

/* ui components */
import UserProfileDisplay from "./user-profile-display";
import CreateNewUserUi from "./create-new-user-ui";
import UserNewProfileForm from "./user-new-profile-form";

/* redux actions */
import {createNewUser} from "../../services/users/usersAction";

const CARD_LIMIT = 5;

const UserProfile = () => {
  const users = useSelector(state => state.Users.users);
  const [ isNewUserEnable, setNewUserEnable ] = useState(false);
  const dispatch = useDispatch();

  /* show only 15 cards in a page */
  const limitedUsers = users.slice(0, CARD_LIMIT);

  /* iterate user profiles  */
  const userProfileCards = limitedUsers.map(user => {
    return (
      <UserProfileDisplay user={user} key={user.id} />
    )
  });

  /* create new user form submit */
  const handleFormSubmit = (data)=> {
    let id = uuidv4();
    let newUser = {
      id : id,
      ...data
    }
    dispatch(createNewUser(newUser));
  }

  /* close modal when you click on cancel button or overlay */
  const handleCancelForm = (data)=> {
    setNewUserEnable(false);
  }

  /* open new user profile form */
  const openNewUserProfileForm = ()=> {
    setNewUserEnable(true);
  }

  return (
    <UserProfileStyle>
      {userProfileCards}
      {!isNewUserEnable && <CreateNewUserUi openNewUserProfileForm={openNewUserProfileForm}/> }
      {isNewUserEnable && <UserNewProfileForm handleFormSubmit={handleFormSubmit} handleCancelForm={handleCancelForm} isNewUserEnable={isNewUserEnable}/> }
    </UserProfileStyle>
  );
};

export default UserProfile;

