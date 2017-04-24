import { GET_COMMENTS, ADD_COMMENT } from '../actions/comment_actions';

const defaultState = {};

const CommentsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case GET_COMMENTS:
      return Object.assign({}, action.comments);
    case ADD_COMMENT:
      const newState = Object.assign({}, state);
      newState[action.comment.id] = action.comment;
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;
