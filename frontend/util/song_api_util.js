
export const createSong = (song) => {
  return $.ajax({
    method: 'POST',
    url: 'api/songs',
    contentType: false,
    processData: false,
    data: song
  });

};

export const getSongs = (artist_id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/songs',
    data: {artist_id}
  });
};


export const getSong = (songId) => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${songId}`
  });
};
