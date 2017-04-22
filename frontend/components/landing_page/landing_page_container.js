import { connect } from 'react-redux';
import { showModal } from '../../actions/modal_actions';
import LandingPage from './landing_page';

const mapStateToProps = (state, ownProps) => {

  return ({

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    showModal: () => dispatch(showModal())
  });

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
