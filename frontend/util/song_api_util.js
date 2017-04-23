
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

export const searchSongs = (search_term) => {
  return $.ajax({
    method: 'GET',
    url: 'api/songs/search',
    data: {search_term}
  });
};

export const updateSong = (songId, song) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/songs/${songId}`,
    data: song
  });
};

export const destroySong = (songId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/songs/${songId}`
  });
};
