import {GET_USER_ERRORS, GET_USER_SUCCESS, NEW_USER_LOADING, NEW_USER_SUCCESS, UPDATE_USER_PROFILE, UPDATE_USER_PROFILE_SUCCESS} from "./types";
import update from 'immutability-helper';

let initialState = {
  isLoading: false,
  users: [{
    id: '1',
    name: 'Kishor Maharjan',
    username: 'Kishoma',
    email: 'kishor.maharjan@gmail.com',
    phone: '041234567',
    profileImageUrl: ''
  }, {
    id: '2',
    name: 'Preety Maharjan',
    username: 'Preet',
    email: 'preet@gmail.com',
    phone: '0412342234',
    profileImageUrl: 'preety.jpg'
  }, {
    id: '3',
    name: 'Nirvana Maharjan',
    username: 'nirvana',
    email: 'nirvana@gmail.com',
    phone: '0432323234',
    profileImageUrl: 'nirvana.png'
  }
  ]
}
const userReducer = (state= initialState, action = {}) => {
  switch(action.type) {
    case GET_USER_SUCCESS :
      return {...state, users: action.payload }
    case GET_USER_ERRORS :
      return { ...state, users: action.payload }
    case NEW_USER_SUCCESS :
      return {...state, isLoading: action.isLoading, users: [...state.users, action.newUser]}
    case NEW_USER_LOADING :
      return {...state, isLoading: action.isLoading }
    case UPDATE_USER_PROFILE :
      return {...state, isLoading: action.isLoading }
    case UPDATE_USER_PROFILE_SUCCESS :
      return {...state, isLoading: action.isLoading, users: updateUser(state, action.user)};
    default:
      return state
  }
}

/* update users in a redux store */
const updateUser = (state, modifyUser)=> {
  let index = state.users.findIndex((user)=> user.id === modifyUser.id);
  return update (state.users, {$splice: [[index, 1, modifyUser]] });
}

export default userReducer;