import { connect } from 'react-redux';
import { playSong, stopSong, startSong } from '../../actions/playlist_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = ({playlist}, ownProps) => {

  return {
    playlist
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    startSong: (song_duration) => dispatch(startSong(song_duration))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
