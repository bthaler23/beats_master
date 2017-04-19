import React from 'react';
// import { withRouter } from 'react-router';
import { email_exists } from '../../util/session_api_util';
import SessionFormContainer from './session_form_container';

class AuthForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email: "", errors: ""};
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
      if (this.state.email.length > 3) {
        (email_exists(this.state.email)).then ((answer) => {
      // debugger
        if (answer) {
          this.setState({form: 'login'});
        } else {
          this.setState({form: 'signup'});
        }
      });
    } else {
      this.setState({errors: "Email must be longer than 3 characters"});
    }
  }

  handleChange(e) {
    const email = e.target.value;
    this.setState({email});
  }


  render() {
    const form = this.state.form;

    if (form) {
      return (<SessionFormContainer formType={form} email={this.state.email} />);
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <ul className="form">
            <h4>{this.state.errors}</h4>
            <input type="text" onChange={this.handleChange} value={this.state.email} placeholder="Enter Email Here" autoFocus/>
            <input type="submit" value="Continue"/>
          </ul>
        </form>
      );
    }
  }
}

// const AuthForm = withRouter(AuthFormWithoutRouter);

export default AuthForm;
