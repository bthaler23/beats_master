import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserPage from './user_page';

  //
  const mapStateToProps = ({user}, ownProps) => {
    return {
      user
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchUser: (userId) => dispatch(fetchUser(userId))
    };

  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage);
