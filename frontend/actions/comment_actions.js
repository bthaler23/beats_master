import * as APIUtil from '../actions/comment_actions';
export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";


export const getComments = comments => ({
  type: GET_COMMENTS,
  comments
});



export const addComment = (comment) => dispatch => (
  APIUtil.newComment(comment)
);


export const fetchComments = (song_id) => dispatch => (
  APIUtil.fetchComments(song_id)
    .then(comments => dispatch(getComments(comments)))
);
