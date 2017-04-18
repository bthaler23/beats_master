import React from 'react';
import AuthForm from '../session/auth_form';


class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {clicked: false};

    this.handleAuth = this.handleAuth.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //Handles initial click for auth form
  handleAuth(e) {
    e.preventDefault();
    this.setState({clicked: true});
  }

  //Handles outside area so user can click outside and get rid of auth form
  handleClick(e) {
    e.preventDefault();
    if (this.state.clicked) {
      this.setState({clicked: false});
    }
  }



  render() {

    let auth_render;
    if (this.state.clicked) {
      auth_render = <div className="show auth_form"><AuthForm /></div>;
    } else {
      auth_render = <div className="none"></div>;
    }

    return (
      <section className="landing_page">
          {auth_render}
        <div className="splash_image">
          <img src={window.zeldaIcon}/>
            <ul className="landing_nav">
              <button onClick={this.handleAuth}>Log in</button>
              <button onClick={this.handleAuth}>Sign Up</button>
            </ul>
        </div>
      </section>

    );
  }



}


export default LandingPage;
