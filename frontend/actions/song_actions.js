import * as APIUtil from '../util/song_api_util';
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const SAVE_SONG = "SAVE_SONG";
export const LOAD_SONG = "LOAD_SONG";

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveSong = songId => ({
  type: RECEIVE_SONG,
  songId
});

export const loadSong = song => ({
  type: LOAD_SONG,
  song
});

export const saveSong = song => ({
  type: SAVE_SONG,
  song
});


export const fetchSongs = (artist_id) => dispatch => (
  APIUtil.getSongs(artist_id)
    .then(songs => dispatch(receiveSongs(songs)))
);

export const fetchSong = songId => dispatch => (
  APIUtil.getSong(songId)
    .then(song => dispatch(loadSong(song)))
);

export const createSong = (song) => dispatch => (
  APIUtil.createSong(song)
    .then(song => dispatch(saveSong(song)))
);

export const editSong = (songId, song) => dispatch => (
  APIUtil.updateSong(songId, song)
    .then(song => dispatch(loadSong(song)))
);
