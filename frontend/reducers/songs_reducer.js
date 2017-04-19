import { RECEIVE_SONG, RECEIVE_SONGS } from "../actions/song_actions";

const defaultState = {};

const SongsReducer = (state = defaultState, action ) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SONGS:
      return Object.assign({}, defaultState, action.songs)
    case RECEIVE_SONG:
      const newState = Object.assign({}, action.song)
      return newState;
    default:
      return state;
  }


};

export default SongsReducer;
