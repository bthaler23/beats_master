import { connect } from 'react-redux';
import { playSong, stopSong, startSong, getCurrentTime } from '../../actions/current_song_actions';
import { setQCount } from '../../actions/song_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = ({songs, current_song}, ownProps) => {

  return {
    q: songs.q,
    q_counter: songs.q_counter,
    current_song
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    playSong: (song) => dispatch(playSong(song)),
    startSong: (song_duration) => dispatch(startSong(song_duration)),
    setQCount: (count) => dispatch(setQCount(count)),
    getCurrentTime: (current_time) => dispatch(getCurrentTime(current_time))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
