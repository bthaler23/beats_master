import { RECEIVE_SONG, RECEIVE_SONGS, SAVE_SONG, LOAD_SONG } from "../actions/song_actions";

const defaultState = {
  songs: {},
  songDetail: {}
};

const SongsReducer = (state = defaultState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONGS:
      return Object.assign({}, state, {songs: action.songs});
    case RECEIVE_SONG:
      return Object.assign({}, state, {songDetail: state.songs[action.songId]});
    case LOAD_SONG:
      return Object.assign({}, state, {songDetail: action.song});
    case SAVE_SONG:
      const newState = Object.assign({}, state);
      newState.songs[action.song.id] = action.song;
      return newState;
    default:
      return state;
  }


};

export default SongsReducer;
