import * as APIUtil from '../util/comments_api_util';
export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";


export const getComments = comments => ({
  type: GET_COMMENTS,
  comments
});

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const createComment = (comment) => dispatch => (
  APIUtil.newComment(comment)
    .then(comment => dispatch(addComment(comment)))
);


export const fetchComments = (song_id) => dispatch => (
  APIUtil.fetchComments(song_id)
    .then(comments => dispatch(getComments(comments)))
);
