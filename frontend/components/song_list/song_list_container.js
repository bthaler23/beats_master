import { connect } from 'react-redux';
import SongList from './song_list';


const mapStateToProps = ({current_song}, {songs}) => {
  return {
    songs: songs,
    current_song
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
