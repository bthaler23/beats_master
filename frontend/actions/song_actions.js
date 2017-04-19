import * as APIUtil from '../util/song_api_util';
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

export receiveSongs = () => ({
  type: RECEIVE_SONGS
})

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
}
