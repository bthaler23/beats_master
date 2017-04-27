import { RECEIVE_SONG, RECEIVE_SONGS,
  SAVE_SONG, LOAD_SONG, POPULATE_Q, SET_Q_COUNT } from "../actions/song_actions";

const defaultState = {
  songs: {},
  songDetail: {},
  q: [],
  q_counter: 0
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
      // let newSong = {};
      // if (state.songDetail.id === action.song.id) {
      //   newSong.songDetail = action.song;
      // }
      // // debugger
      const newState = Object.assign({}, state);
      newState.songs[action.song.id] = action.song;
      return newState;
    case POPULATE_Q:
      let newQ = [action.song];
      let remaining_songs = Object.values(state.songs).reverse().filter((song) => {
        return (action.song.id > song.id);
      });
      newQ = newQ.concat(remaining_songs);
      return Object.assign({}, state, {q: newQ, q_counter: 0});
    case SET_Q_COUNT:
      return Object.assign({}, state, {q_counter: action.count});
    default:
      return state;
  }


};

export default SongsReducer;
