import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
    this.handleUserName = this.handleUserName.bind(this);
    // this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // debugger
    const temp_user = Object.assign({}, this.state);
    temp_user.email = this.props.email;
    const user = {user: temp_user};
    this.props.processForm(user).then(() => this.props.router.push("/stream"));
  }


  render() {
    if (this.props.formType === "signup") {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>
          <label>Create Username:</label>
          <input type="text" onChange={this.handleUserName} value={this.state.username}/><br/>
          <label>Choose Password:</label>
          <input type="text" onChange={this.handlePassword} value={this.state.password}/><br/>
          <input type="submit"/>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>
          <label>Password:</label>
          <input type="text" onChange={this.handlePassword} value={this.state.password}/><br/>
          <input type="submit"/>
        </form>
      );
    }
  }


}


export default SessionForm;
