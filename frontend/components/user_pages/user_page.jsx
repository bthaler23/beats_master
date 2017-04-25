import React from 'react';
import SongListContainer from '../song_list/song_list_container';
import EditUser from './edit_user';
import Modal from '../modal/modal';

class UserPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.user_id);
    this.props.fetchSongs(this.props.params.user_id);
  }

  renderCity () {
    if (this.props.user.city) {
      return (<h2><span>{this.props.user.city}</span></h2>);
    }
  }

  renderCountry() {
    if (this.props.user.country) {
      return (<h2><span>{this.props.user.country}</span></h2>);
    }
  }

  render() {
    return (
      <section className="user_page">
        <Modal><EditUser user={this.props.user}/></Modal>
        <section className="user_splash_container">
          <div className="user_splash">
          <img className="user_splash_image" src={this.props.user.image_url}/>
          <div className="user_splash_details">
            <h1><span>{this.props.user.username}</span></h1>
            {this.renderCity()}
            {this.renderCountry()}
          </div>
          </div>
        </section>
        <section className="user_info_container">
          <article className="user_info_header">
            <h1>Songs</h1>
            <button onClick={this.props.showModal}>Edit User</button>
          </article>
          <article className="user_info_section">
            <div className="user_songs">
              <SongListContainer songs={this.props.songs}/>
            </div>
            <aside className="user_stats">
              User Stats
            </aside>
          </article>
        </section>
      </section>
    );
  }


}


export default UserPage;
