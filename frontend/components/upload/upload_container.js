import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions';
import Upload from './upload';

const mapStateToProps = (state, {router}) => {
  return ({
    router
  });

};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    createSong: (song) => dispatch(createSong(song))
  });

};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
