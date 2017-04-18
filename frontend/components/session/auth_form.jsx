import React from 'react';
import { withRouter } from 'react-router';
import { email_exists } from '../../util/session_api_util';
import SessionFormContainer from './session_form_container';

class AuthForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email: ""};
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    (email_exists(this.state.email)).then ((answer) => {
      // debugger
      if (answer) {
        this.setState({form: 'login'});
      } else {
        this.setState({form: 'signup'});
      }
    });
  }

  handleChange(e) {
    const email = e.target.value;
    this.setState({email});
  }


  render() {
    const form = this.state.form;

    if (form) {
      return (<SessionFormContainer formType={form} email={this.state.email} router={this.props.router}/>);
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Enter Email:</label>
          <input type="text" onChange={this.handleChange} value={this.state.email}/>
          <input type="submit"/>
        </form>
      );
    }
  }
}

// const AuthForm = withRouter(AuthFormWithoutRouter);

export default AuthForm;
