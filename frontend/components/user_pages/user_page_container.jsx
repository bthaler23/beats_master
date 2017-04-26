import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { fetchSongs } from '../../actions/song_actions';
import { showModal } from '../../actions/modal_actions';
import UserPage from './user_page';

  //
  const mapStateToProps = ({session, user, songs}, ownProps) => {
    return {
      currentUser: session.currentUser,
      user: user.userDetail,
      songs: Object.values(songs.songs)
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      fetchSongs: (artist_id) => dispatch(fetchSongs(artist_id)),
      showModal: () => dispatch(showModal()),
      updateUser: (userId, user) => dispatch(updateUser(userId, user))
    };

  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage);
