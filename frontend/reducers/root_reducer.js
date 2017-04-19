import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongsReducer from './songs_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers( {
  session: SessionReducer,
  songs: SongsReducer,
  user: UserReducer
});

export default rootReducer;
