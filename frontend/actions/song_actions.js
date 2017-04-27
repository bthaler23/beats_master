import * as APIUtil from '../util/song_api_util';
import * as LikeAPIUtil from '../util/like_api_util';
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const SAVE_SONG = "SAVE_SONG";
export const LOAD_SONG = "LOAD_SONG";
export const POPULATE_Q = "POPULATE_Q";
export const SET_Q_COUNT = "SET_Q_COUNT";

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

export const populateQ = song => ({
  type: POPULATE_Q,
  song
});

export const setQCount = (count) => ({
  type: SET_Q_COUNT,
  count
});

export const createLike = (song_id) => dispatch => (
  LikeAPIUtil.likeSong(song_id)
    .then((song) => {
      return (dispatch(saveSong(song)));
    })
);

export const destroyLike = (song_id) => dispatch => (
  LikeAPIUtil.unlikeSong(song_id)
    .then((song) => {
      return (dispatch(saveSong(song)));
    })
);



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
