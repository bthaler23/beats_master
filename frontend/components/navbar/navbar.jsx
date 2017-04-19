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
    //Replace search with search component
    return (
      <ul className="navbar">
        <button className="left_search">Logo</button>
        <button className="left_search">Home</button>
        <div className="search">Search</div>
        <button>Upload</button>
        <button>{this.props.username}</button>
        <button onClick={this.handleLogout}>Logout</button>
      </ul>
    );
  }
}

const Navbar = withRouter(NavbarWithoutRouter);

export default Navbar;
