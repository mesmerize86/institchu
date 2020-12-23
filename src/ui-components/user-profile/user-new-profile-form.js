import React, { useState, useEffect } from 'react';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import classnames from "classnames";

/* styling */
import {ButtonWrapper, UserDescriptionWrapperStyle, H1} from "./user-profile-style";

/* ui components */
import FloatingLabel from "../forms/floating-label/floating-label";
import Button from "../forms/button/button";
import Loader from "../loader/loader";
import Card from '../card/card';
import BodyOverlay from "../overlay/body-overlay";

const UserNewProfileForm = ({handleFormSubmit, handleCancelForm, isNewUserEnable})=> {
  const { register, handleSubmit, reset } = useForm();
  const loading = useSelector(state => state.Users.isLoading);
  const [isLoading, setLoading] = useState(false);

  /* reset form */
  useEffect(()=> {
    setLoading(loading);
    reset();
  }, [loading, reset]);

  /* submit new user form */
  const onSubmit = (data, e)=> {
    handleFormSubmit(data);
    setLoading(loading);
  }

  return (
    <Card className={classnames('new-user-form', {'float-card' : isNewUserEnable})}>
      {isLoading && <Loader />}
      <H1>Add a new profile</H1>
      <form onSubmit={ handleSubmit(onSubmit) } >
        <UserDescriptionWrapperStyle>
          <FloatingLabel htmlFor="fullname" register={register} name="name" field="Full Name" />
          <FloatingLabel htmlFor="uername" register={register} name="username" field="Username" />
          <FloatingLabel htmlFor="email" register={register} name="email" field="Email" />
          <FloatingLabel htmlFor="phone" register={register} name="phone" field="Phone" />
          <FloatingLabel htmlFor="profileImage" register={register} name="profileImageUrl" field="Profile Image Name" />
          <ButtonWrapper>
            <Button type="submit" value="Save" />
            <Button type="button" value="Cancel" handleClickEvent={ handleCancelForm }/>
          </ButtonWrapper>
        </UserDescriptionWrapperStyle>
      </form>
      <BodyOverlay isModalOpen={isNewUserEnable} onClose={handleCancelForm}/>
    </Card>
  )
}

export default UserNewProfileForm;