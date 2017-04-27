import { connect } from 'react-redux';
import SongPage from './song_page';
import { fetchSong, receiveSong, saveSong, createLike, destroyLike } from '../../actions/song_actions';
import { showModal } from '../../actions/modal_actions';



const mapStateToProps = ({session, songs}, ownProps) => {
  return {
    currentUser: session.currentUser,
    song: songs.songDetail,
    preloaded: songs.songs.hasOwnProperty(ownProps.params.song_id)
  };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  //Maybe just get it from song list thats already been loaded
  fetchSong: (songId) => dispatch(fetchSong(songId)),
  receiveSong: (song) => dispatch(receiveSong(song)),
  showModal: () => dispatch(showModal()),
  likeSong: (song_id) => dispatch(createLike(song_id)),
  unlikeSong: (song_id) => dispatch(destroyLike(song_id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPage);
