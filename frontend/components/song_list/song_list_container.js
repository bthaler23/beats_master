import { connect } from 'react-redux';
import { createLike, destroyLike } from '../../actions/song_actions';
import SongList from './song_list';


const mapStateToProps = ({current_song}, {songs}) => {
  return {
    songs: songs,
    current_song
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    likeSong: (song_id) => dispatch(createLike(song_id)),
    unlikeSong: (song_id) => dispatch(destroyLike(song_id))
  };

};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
