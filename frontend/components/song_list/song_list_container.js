import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongList from './song_list';

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
)(SongList);
