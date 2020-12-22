import { GET_USER_ERRORS, GET_USER_SUCCESS, NEW_USER_SUCCESS , NEW_USER_LOADING, UPDATE_USER_PROFILE, UPDATE_USER_PROFILE_SUCCESS} from "./types";
import axios from 'axios';

export const getAllUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = await response.data;
      dispatch({type: GET_USER_SUCCESS, payload: data})
    } catch (error) {
      dispatch({type: GET_USER_ERRORS, payload: error})
    }
  }
}

export const createNewUser = (user) => {
  return async dispatch => {
    dispatch({ type: NEW_USER_LOADING, isLoading: true})
    try {
      setTimeout(()=> {
        dispatch({type: NEW_USER_SUCCESS, newUser: user, isLoading: false});
      }, 500);
    } catch (error ) {
      console.log(error);
    }
  }
}

export const updateUser = (user) => {
  return async dispatch => {
    dispatch({ type: UPDATE_USER_PROFILE, isLoading: true })
    try {
      setTimeout(()=> {
        dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, user: user, isLoading: false})
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
}