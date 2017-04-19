import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongTileIndex from './song_tile_index';

const mapStateToProps = ({songs}, ownProps) => {
  return {
    songs: Object.values(songs.songs)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchSongs: () => dispatch(fetchSongs())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongTileIndex);
