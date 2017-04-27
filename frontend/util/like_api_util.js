export const likeSong = (song_id) => {
  return $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: {song_id}
  });
};

export const unlikeSong = (song_id) => {

    return $.ajax({
      method: 'DELETE',
      url: `api/likes/0`,
      data: {song_id}
    });
};
