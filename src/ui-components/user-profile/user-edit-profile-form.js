import React from 'react';
import {useForm} from "react-hook-form";

/* styling */
import { ButtonWrapper } from './user-profile-style';

/* ui components */
import FloatingLabel from "../forms/floating-label/floating-label";
import Button from "../forms/button/button";
import Input from "../forms/input/input";

const UserEditProfileForm = ({user, handleUpdateForm, handleCancelForm}) => {
  const { register, handleSubmit } = useForm();

  /* handle update user form submit */
  const onSubmit = (data)=> {
    handleUpdateForm(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FloatingLabel htmlFor="fullname" register={register} name="name" field="Full Name" value={ user.name }/>
      <FloatingLabel htmlFor="uername" register={register} name="username" field="Username" value={ user.username }/>
      <FloatingLabel htmlFor="email" register={register} name="email" field="Email" value={ user.email }/>
      <FloatingLabel htmlFor="phone" register={register} name="phone" field="Phone" value={ user.phone }/>
      <FloatingLabel htmlFor="profileImage" register={register} name="profileImageUrl" field="Profile Image Name" value={ user.profileImageUrl }/>
      <Input type="hidden" register={register} name="id" value={user.id}/>
      <ButtonWrapper>
        <Button type="submit" value="Save" />
        <Button type="button" value="Cancel" handleClickEvent={ handleCancelForm }/>
      </ButtonWrapper>
    </form>

  );
};

export default UserEditProfileForm;