import { connect } from 'react-redux';
import SongPage from './song_page';
import { fetchSong } from '../../actions/song_actions';

const mapStateToProps = ({songs}, ownProps) => {
  return {
    song: songs
  };

};

const mapDispatchToProps = (dispatch, ownProps) => ({

  fetchSong: (songId) => dispatch(fetchSong(songId))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPage);
