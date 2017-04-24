import React from 'react';
import PlayButton from '../buttons/play_button';
import Modal from '../modal/modal';
import Edit from '../forms/edit';
import AuthForm from '../session/auth_form';
import { destroySong } from '../../util/song_api_util';

class SongPage extends React.Component {

  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
    this.deleteSong = this.deleteSong.bind(this);

  }

  componentDidMount() {
    //Fetches from server if no songs were preloaded - Fetches songs from state if songs were preloaded
    //Going to have to do a check later to see if song was in the state
    if (this.props.preloaded) {
      this.props.receiveSong(this.props.params.song_id);
    } else {
      this.props.fetchSong(this.props.params.song_id);
    }
  }

  //Check this if this is good
  //Use componetWillReceiveProps (newProps)
  componentWillReceiveProps(newProps) {

    if (this.props.params.song_id != this.props.song.id) {
      if (this.props.preloaded) {
        this.props.receiveSong(this.props.params.song_id);
      } else {
        this.props.fetchSong(this.props.params.song_id);
      }
    }
  }

  renderModal() {
    this.props.showModal();
  }

  deleteSong(e) {
    e.preventDefault();
    destroySong(this.props.params.song_id);
    this.props.router.push('/stream');
  }

  renderUserButtons() {
    if ((this.props.currentUser) && (this.props.currentUser.id === this.props.song.artist_id)) {
      return (
        <div className="user_song_buttons">
          <button className="edit_button" onClick={this.renderModal}>Edit</button>
          <button className="delete_button" onClick={this.deleteSong}>Delete</button>
        </div>
      );
    }
  }

  modalType() {
    if (this.props.currentUser) {
      return (<Modal><Edit song={this.props.song} /></Modal>);
    } else {
      return (<Modal form={AuthForm} />);
    }
  }


  render() {

    return(
      <section>
        <div className="song_page_splash">
        {this.modalType()}
          <div className="song_page_header">
          <PlayButton song={this.props.song}/>
            <div className="song_page_info">
              <div className="song_page_credits">
                <h2><span>{this.props.song.artist}</span></h2>
                <h1><span>{this.props.song.title}</span></h1>
              </div>
              <div className="song_page_additional_info">
                <h2># {this.props.song.genre}</h2>
              </div>
            </div>
          </div>
          <div className="song_image">
            <img src={this.props.song.image_url} />
          </div>
        </div>
        <section className="comments_section">
          <div className="comments_header">
            {this.renderUserButtons()}

          </div>
        </section>
      </section>
    );
  }

}

export default SongPage;
