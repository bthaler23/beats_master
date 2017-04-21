import { connect } from 'react-redux';
import SongPage from './song_page';
import { fetchSong, receiveSong, saveSong } from '../../actions/song_actions';

const mapStateToProps = ({session, songs}, ownProps) => {
  return {
    currentUser: session.currentUser,
    song: songs.songDetail,
    //Checking if there are any loaded songs in the state - Later figure out how to check if current song ID is in state
    preloaded: !(jQuery.isEmptyObject(songs.songs))
  };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  //Maybe just get it from song list thats already been loaded
  fetchSong: (songId) => dispatch(fetchSong(songId)),
  receiveSong: (song) => dispatch(receiveSong(song))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPage);
