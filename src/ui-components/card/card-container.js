import React, { useState, useEffect } from 'react';
import classnames from "classnames";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";

/* styles component */
import { CardStyle, UserDescriptionWrapperStyle, ButtonWrapper } from "./card-style";

/* ui components */
import Input  from "../forms/input/input";
import BodyOverlay from "../overlay/body-overlay";
import Button from "../forms/button/button";

/* helper methods */
import { handleProfileImage } from "../../helpers/profile-image/profile-image";

/* redux action */
import { updateUser } from '../../services/users/usersAction';

const CardContainer = ({user}) => {
  const [isEditVisible, setEditVisible] = useState(true);
  const [ isFormDisable, setFormDisable ] = useState(true);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  /**
   * handle hover state
   */
  const handleHoverState = ()=> {
    setEditVisible(false);
  }

  /**
   * handle mouse leave
   */
  const handleMouseLeave = ()=> {
    setEditVisible(true);
  }

  /**
   *  handle edit user
   * @param e
   * @param user
   */
  const handleEditUser = (e, user) => {
    e.preventDefault();
    setFormDisable(false);
  }

  /**
   * form submit
   * @param data
   */
  const handleUpdateForm = (data) => {
    dispatch(updateUser(data));
    setFormDisable(true);
  }

  /**
   * handle form cancel
   */
  const handleCancelForm = () => {
    setFormDisable(true);
  }

  useEffect(()=> {

  },[]);

  return (
    <CardStyle onMouseEnter={handleHoverState} onMouseLeave={ handleMouseLeave } className={classnames({'float-card ': !isFormDisable})} >
      { handleProfileImage(user) }
      <form onSubmit={ handleSubmit(handleUpdateForm)} >
        <UserDescriptionWrapperStyle>
          <Input value={ user.name } isDisabled={ isFormDisable } register={register} name="name"/>
          <Input value={ user.username } isDisabled={ isFormDisable } register={register} name="username"/>
          <Input value={ user.email } isDisabled={ isFormDisable } register={register} name="email"/>
          <Input value={ user.phone } isDisabled={ isFormDisable } register={register} name="phone"/>
          <input type="hidden" name="id" ref={register} value={ user.id } />
          {!isFormDisable && <Input value={ user.profileImageUrl } isDisabled={ isFormDisable } register={register} name="profileImageUrl"/>}
          {!isFormDisable && <Buttons handleCancelForm={handleCancelForm} isOverlyEnable={isFormDisable}/> }
        </UserDescriptionWrapperStyle>
      </form>
      { isFormDisable && <input type="button" className={classnames('button-edit', {'is-visible-lg' : isEditVisible }) } onClick={(e)=> handleEditUser(e, user) } value="Edit User" /> }
    </CardStyle>
  );
};

export default CardContainer;

/**
 * Button Groups
 *
 * @param handleCancelForm
 * @param isOverlyEnable
 * @returns {JSX.Element}
 * @constructor
 */
const Buttons = ({handleCancelForm, isOverlyEnable})=> {
  return (
    <ButtonWrapper>
      <Button type="submit" value="Save" />
      <Button type="button" value="Cancel" handleClickEvent={ handleCancelForm }/>
      <BodyOverlay isModalOpen={ !isOverlyEnable } onClose={ handleCancelForm }/>
    </ButtonWrapper>
  )
}