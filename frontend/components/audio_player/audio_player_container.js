import { connect } from 'react-redux';
import AudioPlayer from './audio_player';

const mapStateToProps = ({playlist}, ownProps) => {

  return {
    current_song: playlist.current_song
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
