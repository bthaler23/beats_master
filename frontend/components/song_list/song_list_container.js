import { connect } from 'react-redux';
import SongList from './song_list';


const mapStateToProps = ({playlist}, {songs}) => {
  return {
    songs: songs,
    playlist
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };

};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
