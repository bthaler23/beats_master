import { RECEIVE_SONG, RECEIVE_SONGS } from "../actions/song_actions";

const defaultState = {
  songs: {},
  songDetail: {}
};

const SongsReducer = (state = defaultState, action ) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SONGS:
      return Object.assign({}, state, {songs: action.songs})
    case RECEIVE_SONG:
      return Object.assign({}, state, {songDetail: action.song})
    default:
      return state;
  }


};

export default SongsReducer;
