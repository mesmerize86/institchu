import React, { useState, useEffect } from 'react';
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";

/* styling */
import {UserDescriptionWrapperStyle, EditButton} from "./user-profile-style";

/* ui components */
import UserEditProfileForm from "./user-edit-profile-form";
import Card from '../card/card';
import BodyOverlay from "../overlay/body-overlay";
import Loader from "../loader/loader";

/* helper methods */
import {handleProfileImage} from "../../helpers/profile-image/profile-image";

/* redux action */
import {updateUser} from "../../services/users/usersAction";


const UserProfileDisplay = ({ user }) => {
  const [hideEditButton, setHideEditButton] = useState(true);
  const [isEditVisible, setEditVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  /* redux state */
  const loading = useSelector(state => state.Users.isLoading);

  useEffect(()=> {
    setLoading(loading);
    if (!loading) {
      setEditVisible(false);
      setHideEditButton(true);
    }
  },[loading]);


  /* handle hover state */
  const handleHoverState = ()=> {
    setHideEditButton(false);
  }

  /* handle mouse out state */
  const handleMouseLeave = ()=> {
    setHideEditButton(true  )
  }

  /* show edit when you click on edit button */
  const handleEditUser = ()=> {
    setEditVisible(true);
  }

  /* handle update user profile form */
  const handleUpdateForm = (data)=> {
    dispatch(updateUser(data));
    setLoading(loading);
  }

  /* close modal */
  const handleCancelForm = ()=> {
    setEditVisible(false);
    setHideEditButton(true);
  }

  return (
    <Card className={classnames({'float-card' : isEditVisible})}>
      {!isEditVisible &&
        <div onMouseEnter={handleHoverState} onMouseLeave={handleMouseLeave}>
          {handleProfileImage(user)}
          <UserDescriptionWrapperStyle>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </UserDescriptionWrapperStyle>
          <EditButton type="button" className={classnames({'is-visible-lg': hideEditButton})}
                      onClick={(e) => handleEditUser(e, user)} value="Edit User"/>
        </div>
      }
      { isEditVisible &&
        <>
          {isLoading && <Loader message={'updating...'}/>}
          {handleProfileImage(user)}
          <UserEditProfileForm  user={user} handleUpdateForm={handleUpdateForm} handleCancelForm={handleCancelForm} />
          <BodyOverlay isModalOpen={ isEditVisible } onClose={ handleCancelForm }/>
        </>
      }
    </Card>
  );
};

export default UserProfileDisplay;