import React from 'react';
import { withRouter } from 'react-router';
import SearchBar from '../search_bar/search_bar';

class NavbarWithoutRouter extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleUserPage = this.handleUserPage.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.showModal = this.showModal.bind(this);

  }


  handleHome(e) {
    e.preventDefault();
    if (this.props.username) {
      this.props.router.push('/stream');
    } else {
      this.props.router.push('/');
    }
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/'));
  }

  handleUserPage(e) {
    e.preventDefault();
    this.props.router.push(`/users/${this.props.userId}`);
  }

  handleUpload(e) {
    e.preventDefault();
    this.props.router.push('/upload');
  }

  checkLoggedIn() {
    if (this.props.username) {
      return (
        <div className="right_nav">
          <button onClick={this.handleUpload}>Upload</button>
          <img src={this.props.user_image} />
          <button onClick={this.handleUserPage}>{this.props.username}</button>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        // Is this a good way to do this - look to refactor later. Calling to show the modal on the Show Page that is rendered when there is no user logged in
        <div className="right_nav logged_out">
          <button onClick={this.showModal}>Sign In</button>
          <button onClick={this.showModal}>Create Account</button>
        </div>
      );
    }
  }

  showModal() {
    this.props.showModal();
  }

  render() {
    //Replace search with search component
    return (
      <div className="navbar_container">
        <div className="navbar_background" />
        <ul className="navbar">
          <div className="left_nav">
            <button onClick={this.handleHome}><img className="navbar_logo"src={window.beatsMaster}/></button>
            <button onClick={this.handleHome}>Home</button>
          </div>
          <div className="navbar_search_container">
            <div className="navbar_search">
              <SearchBar />
            </div>
          </div>
          {this.checkLoggedIn()}
        </ul>
      </div>
    );
  }
}

const Navbar = withRouter(NavbarWithoutRouter);

export default Navbar;
