import { GET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

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
    case REMOVE_COMMENT:
      const newerState = Object.assign({}, state);
      delete newerState[action.commentId];
      return newerState;
    default:
      return state;
  }
};

export default CommentsReducer;
