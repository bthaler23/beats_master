import React from 'react';
import { withRouter } from 'react-router';

class SessionFormWithoutRouter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleEmail = this.handleEmail.bind(this);
  }

  handleUserName(e) {
    let username = e.target.value;
    this.setState({username});
  }

  handlePassword(e) {
    let password = e.target.value;
    this.setState({password});
  }

  handleSubmit(e){
    e.preventDefault();
    const temp_user = Object.assign({}, this.state);
    temp_user.email = this.props.email;
    const user = {user: temp_user};
    this.props.processForm(user).then(() => {
       this.props.router.push("/stream");
     });
  }

  renderErrors() {
    return (
      this.props.errors.map((error, i) => (<div key={`error-${i}`}>{error}</div>)));
  }


  render() {
    if (this.props.formType === "signup") {
      return (
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <ul className="form">
            <h1>Create Account</h1>
            <input type="text" onChange={this.handleUserName} value={this.state.username} placeholder="Create Username Here" autoFocus/><br/>
            <input type="password" onChange={this.handlePassword} value={this.state.password} placeholder="Enter Your Password" /><br/>
            <input type="submit" value="Continue"/>
          </ul>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <ul className="form">
            <h1>{this.props.formType}</h1>
            <input type="password" onChange={this.handlePassword} value={this.state.password} placeholder="Password" autoFocus/><br/>
            <input type="submit"/>
          </ul>
        </form>
      );
    }
  }


}

const SessionForm = withRouter(SessionFormWithoutRouter);

export default SessionForm;
