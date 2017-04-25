import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchSongs } from '../../actions/song_actions';
import { showModal } from '../../actions/modal_actions';
import UserPage from './user_page';

  //
  const mapStateToProps = ({user, songs}, ownProps) => {
    return {
      user,
      songs: Object.values(songs.songs)
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      fetchSongs: (artist_id) => dispatch(fetchSongs(artist_id)),
      showModal: () => dispatch(showModal())
    };

  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage);
