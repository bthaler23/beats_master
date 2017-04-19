import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({session}, ownProps) => {
  if (session.currentUser) {
    return ({
      username: session.currentUser.username,
    });
  } else {
    return ({});
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    logout: () => dispatch(logout())
  });

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
