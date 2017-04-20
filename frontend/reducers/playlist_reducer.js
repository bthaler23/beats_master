import { PLAY_SONG, STOP_SONG } from '../actions/playlist_actions';

const defaultState = {
  current_song: {},
  playing: false
};

const PlaylistReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case PLAY_SONG:
      return Object.assign({}, defaultState, {current_song: action.song, playing: true } );
    case STOP_SONG:
      return Object.assign({}, state, { playing: false });
    default:
      return state;
  }

};

export default PlaylistReducer;
