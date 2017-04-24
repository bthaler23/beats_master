import { GET_COMMENTS } from '../actions/comment_actions';

const defaultState = {};

const CommentsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case GET_COMMENTS:
      return Object.assign({}, action.comments);
    default:
      return state;
  }
};

export default CommentsReducer;
