import { connect } from 'react-redux';
import { playSong, stopSong, startSong, getCurrentTime } from '../../actions/playlist_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = ({playlist}, ownProps) => {

  return {
    playlist
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    playSong: (song, last_song) => dispatch(playSong(song, last_song)),
    startSong: (song_duration) => dispatch(startSong(song_duration)),
    getCurrentTime: (current_time) => dispatch(getCurrentTime(current_time))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
