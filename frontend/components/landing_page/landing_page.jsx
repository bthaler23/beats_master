import React from 'react';
import AuthForm from '../session/auth_form';
import SongTileIndexContainer from '../song_tiles/song_tile_index_container';
import SearchBar from '../search_bar/search_bar';
import Modal from '../modal/modal';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show_form: false};

    this.handleAuth = this.handleAuth.bind(this);
  }

  //Handles initial click for auth form
  handleAuth(e) {
    e.preventDefault();
    this.props.showModal();
  }



  render() {

    return (
      <section className="landing_page">
        <Modal form={ AuthForm }/>
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
        <div className="landing_search_container">
          <div className="landing_search">
            <SearchBar />
          </div>
        </div>
        <div>
          <SongTileIndexContainer />
        </div>
      </section>

    );
  }



}


export default LandingPage;
