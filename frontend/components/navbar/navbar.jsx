import React from 'react';
import { withRouter } from 'react-router';


class NavbarWithoutRouter extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/'));
  }

  render() {
    return (
      <section>
        <button onClick={this.handleLogout}>Logout</button>
      </section>
    );
  }
}

const Navbar = withRouter(NavbarWithoutRouter);

export default Navbar;
