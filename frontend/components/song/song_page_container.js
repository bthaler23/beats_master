import { connect } from 'react-redux';
import SongPage from './song_page';
import { fetchSong } from '../../actions/song_actions';

const mapStateToProps = ({session, songs}, ownProps) => {
  return {
    currentUser: session.currentUser,
    song: songs.songDetail
  };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  //Maybe just get it from song list thats already been loaded
  fetchSong: (songId) => dispatch(fetchSong(songId))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPage);
