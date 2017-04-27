import { connect } from 'react-redux';
import { createListLike, destroyListLike } from '../../actions/song_actions';
import SongList from './song_list';


const mapStateToProps = ({current_song}, {songs}) => {
  return {
    songs: songs,
    current_song
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    likeSong: (song_id) => dispatch(createListLike(song_id)),
    unlikeSong: (song_id) => dispatch(destroyListLike(song_id))
  };

};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
