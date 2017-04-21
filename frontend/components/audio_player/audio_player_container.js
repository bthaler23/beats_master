import { connect } from 'react-redux';
import { playSong, stopSong } from '../../actions/playlist_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = ({playlist}, ownProps) => {

  return {
    playlist
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    playSong: (song) => dispatch(playSong(song)),
    stopSong: () => dispatch(stopSong())
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
