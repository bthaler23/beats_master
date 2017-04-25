export const newComment = (comment) => {

  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: comment
  });

};

export const fetchComments = (song_id) => {

  return $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: {song_id}
  });

};

export const deleteComment = (commentId) => {

  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`
  });

};
