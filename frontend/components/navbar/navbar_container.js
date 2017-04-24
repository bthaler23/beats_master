import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { showModal } from '../../actions/modal_actions';
import Navbar from './navbar';

const mapStateToProps = ({session}, ownProps) => {
  if (session.currentUser) {
    return ({
      username: session.currentUser.username,
      userId: session.currentUser.id,
      user_image: session.currentUser.image_url
    });
  } else {
    return ({});
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    logout: () => dispatch(logout()),
    showModal: () => dispatch(showModal())
  });

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
