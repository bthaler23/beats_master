import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => {
  return ({

  });
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
