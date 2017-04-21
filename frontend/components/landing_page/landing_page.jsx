import React from 'react';
import AuthForm from '../session/auth_form';
import SongTileIndexContainer from '../song_tiles/song_tile_index_container';

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
            <div className="landing_nav">
              <h1>BeatsMaster</h1>
              <div className="landing_nav_buttons">
                <button onClick={this.handleAuth}>Sign in</button>
                <button onClick={this.handleAuth}>Create Account</button>
              </div>
            </div>
        </div>
        <div className="landing_search">
          <input type="text" placeholder="Search for songs, artists, bands, podcasts" />
        </div>
        <div>
          <SongTileIndexContainer />
        </div>

      </section>

    );
  }



}


export default LandingPage;
