import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USER = "GET_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const updateUser = (userId, user) => dispatch => (
  APIUtil.updateUser(userId, user)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchUser = (userId) => dispatch => (
  APIUtil.getUser(userId)
    .then(user => dispatch(receiveUser(user)))
);
