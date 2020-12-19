import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';

/* ui componenets */
import NewUserForm from "./new-user-form";
import CardContainer from "./card-container";
import CreateForm from "./create-form"

/* actions */
import { createNewUser } from "../../services/users/usersAction";

const CARD_LIMIT = 5;

const Card = () => {
  const [isNewUserCreate, setNewUserCreate] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.Users.users);


  /* show only 15 cards in a page */
  const limitedUsers = users.slice(0, CARD_LIMIT);

  const cardProfile =  limitedUsers.map(user => {
    return (
      <CardContainer user={user} key={user.id}/>
    )
  });

  /**
   * handle form submit
   */
  const handleFormSubmit = (data)=> {
    let id = uuidv4();
    let newUser = {
      id : id,
      ...data
    }
    dispatch(createNewUser(newUser));
  }


  /**
   * handle cancel foem
   */
  const handleCancelForm = ()=> {
    setNewUserCreate(false);
  }

  /* open new form */
  const handleNewProfile = ()=> {
    setNewUserCreate(true);
  }

  return (
    <>
      {cardProfile}
      { !isNewUserCreate && <CreateForm handleNewProfile={handleNewProfile} /> }
      { isNewUserCreate && <NewUserForm handleSubmitForm={handleFormSubmit} handleCancelForm={handleCancelForm} isNewUserCreate={isNewUserCreate} /> }
    </>
  )
};


export default Card;

