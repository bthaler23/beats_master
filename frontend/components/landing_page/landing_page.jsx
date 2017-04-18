import React from 'react';
import AuthForm from '../session/auth_form';


class LandingPage extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section className="landing_page">
        <div className="auth_form">
          <AuthForm/>
        </div>
        <div className="splash_image">
          <img src={window.zeldaIcon} />
        </div>
      </section>

    );
  }



}


export default LandingPage;
