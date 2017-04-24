import { PLAY_SONG, STOP_SONG, START_SONG, GET_CURRENT_TIME } from '../actions/playlist_actions';

const defaultState = {
  current_song: {},
  playing: false,
  current_time: 0,
  duration: 0,
  last_song: {}
};

const PlaylistReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case PLAY_SONG:
      if (action.last_song) {
        return Object.assign({}, state, {current_song: action.song, playing: true, last_song: action.last_song});
      }
      return Object.assign({}, state, {current_song: action.song, playing: true } );
    case STOP_SONG:
      return Object.assign({}, state, { playing: false });
    case START_SONG: {
      return Object.assign({}, state, { current_time: 0, duration: action.song_duration });
    }
    case GET_CURRENT_TIME:
      return Object.assign({}, state, { current_time: action.current_time });
    default:
      return state;
  }

};

export default PlaylistReducer;
