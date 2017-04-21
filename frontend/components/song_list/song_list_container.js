import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongList from './song_list';
import { withRouter } from 'react-router';

const mapStateToProps = ({songs, playlist}, ownProps) => {
  return {
    songs: Object.values(songs.songs),
    artist_id: ownProps.router.params.user_id,
    playlist
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchSongs: (artist_id) => dispatch(fetchSongs(artist_id)),
  };

};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList));
