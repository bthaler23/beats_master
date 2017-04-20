import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}, {email, formType, router}) => {
  return {
    router,
    errors: session.errors,
    email,
    formType
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  const processForm = (formType === "login" ) ? login : signup;
  return {
    processForm: user => dispatch(processForm(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
