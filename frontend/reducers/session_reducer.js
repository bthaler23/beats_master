import { RECIEVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const defaultState = {
  currentUser: null,
  errors: []
};


const SessionReducer = (state = defaultState, action ) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      const currentUser = action.currentUser;
      return Object.assign({}, defaultState, {currentUser});
    case RECIEVE_ERRORS:
      return Object.assign({}, defaultState, action.errors);
    default:
      return state;
  }
};

export default SessionReducer;
