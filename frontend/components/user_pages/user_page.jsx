import React from 'react';
import SongListContainer from '../song_list/song_list_container';
import EditUser from './edit_user';
import Modal from '../modal/modal';
import AuthForm from '../session/auth_form';

class UserPage extends React.Component {

  constructor(props) {
    super(props);

    this.updateImage = this.updateImage.bind(this);
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

  renderEdit() {
    if (this.props.currentUser && this.props.user.id === this.props.currentUser.id) {
      return (<button onClick={this.props.showModal}>Edit User</button>);
    }
  }

  renderUpdateImage() {
    if (this.props.currentUser && this.props.user.id === this.props.currentUser.id) {
      return (<label className="image_update"> Update Image
                <input type="file" onChange={this.updateImage} />
              </label>
              );
    }

  }

  updateImage(e) {
    var file = e.currentTarget.files[0];

    if (file) {
      var formData = new FormData();
      formData.append("user[image]", file);
      this.props.updateUser(this.props.user.id, formData, "image");
    }
  }

  modalType() {
    if (this.props.currentUser) {
      if (this.props.user.id === this.props.currentUser.id) {
        // debugger
        return (<Modal><EditUser user={this.props.user}/></Modal>);
      }
    } else {
        return (<Modal><AuthForm /></Modal>);
    }
  }

  render() {
    return (
      <section className="user_page">
        {this.modalType()}
        <section className="user_splash_container">
          <div className="user_splash">
          <div className="user_splash_image">
            <img className="user_splash_image" src={this.props.user.image_url}/>
            {this.renderUpdateImage()}
          </div>
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
            {this.renderEdit()}
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
