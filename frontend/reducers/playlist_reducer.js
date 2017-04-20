import { PLAY_SONG } from '../actions/playlist_actions';

const defaultState = {
  current_song: {}
};

const PlaylistReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case PLAY_SONG:
      return Object.assign({}, defaultState, {current_song: action.song} );
    default:
      return state;
  }

};

export default PlaylistReducer;
