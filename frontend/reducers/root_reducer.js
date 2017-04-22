import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongsReducer from './songs_reducer';
import UserReducer from './user_reducer';
import PlayListReducer from './playlist_reducer';
import ModalReducer from './modal_reducer';


const rootReducer = combineReducers( {
  session: SessionReducer,
  songs: SongsReducer,
  user: UserReducer,
  playlist: PlayListReducer,
  modal: ModalReducer
});

export default rootReducer;
