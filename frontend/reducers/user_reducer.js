import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

const defaultState = {
  userDetail: {},
  users: []
};

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {userDetail: action.user});
    case RECEIVE_USERS:
      return Object.assign({}, state, {users: action.users});
    default:
      return state;
  }
};

export default UserReducer;
