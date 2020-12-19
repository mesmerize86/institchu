import React, { useState, useEffect } from 'react';
import {ButtonWrapper, CardStyle, UserDescriptionWrapperStyle, H1} from "./card-style";
import FloatingLabel from "../forms/floating-label/floating-label";
import Button from "../forms/button/button";
import BodyOverlay from "../overlay/body-overlay";
import classnames from "classnames";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import Loader from "../loader/loader";


const NewUserForm = ({handleSubmitForm, handleCancelForm, isNewUserCreate })=> {
  const { register, handleSubmit ,reset } = useForm();
  const loading = useSelector(state => state.Users.isLoading);
  const [isLoading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(loading);
    reset();
  }, [handleSubmitForm]);

  const onSubmit = (data, e)=> {
    handleSubmitForm(data);
    setLoading(true);
  }
  return (
    <CardStyle className={classnames('new-user-form', {'float-card ': isNewUserCreate})} >
      {isLoading && <Loader message={'adding...'}/>}
      <H1>Add a new profile</H1>
      <form onSubmit={ handleSubmit(onSubmit) } >
        <UserDescriptionWrapperStyle>
          <FloatingLabel htmlFor="fullname" register={register} name="name" field="Full Name"/>
          <FloatingLabel htmlFor="uername" register={register} name="username" field="Username"/>
          <FloatingLabel htmlFor="email" register={register} name="email" field="Email"/>
          <FloatingLabel htmlFor="phone" register={register} name="phone" field="Phone"/>
          <FloatingLabel htmlFor="profileImage" register={register} name="profileImageUrl" field="Profile Image Name"/>
          <ButtonWrapper>
            <Button type="submit" value="Save" />
            <Button type="button" value="Cancel" handleClickEvent={ handleCancelForm }/>
          </ButtonWrapper>
        </UserDescriptionWrapperStyle>
      </form>
      <BodyOverlay isModalOpen={ isNewUserCreate } onClose={ handleCancelForm }/>
    </CardStyle>
  )
}

export default NewUserForm;