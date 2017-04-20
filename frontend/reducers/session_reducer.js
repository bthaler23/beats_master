import { RECIEVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const defaultState = {
  currentUser: null,
  errors: []
};


const SessionReducer = (state = defaultState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, defaultState, {currentUser});
    case RECIEVE_ERRORS:
      return Object.assign({}, defaultState, {errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
