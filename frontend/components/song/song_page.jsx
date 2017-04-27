import React from 'react';
import PlayButton from '../buttons/play_button';
import Modal from '../modal/modal';
import Edit from '../forms/edit';
import AuthForm from '../session/auth_form';
import CommentForm from '../comments/comment_form';
import CommentsIndex from '../comments/comments_index';
import { destroySong } from '../../util/song_api_util';
import { Link } from 'react-router';

class SongPage extends React.Component {

  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.likeSong = this.likeSong.bind(this);
    this.unlikeSong = this.unlikeSong.bind(this);

  }

  componentDidMount() {
    //Fetches from server if no songs were preloaded - Fetches songs from state if songs were preloaded
    //Going to have to do a check later to see if song was in the state - Fixed
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
        <div className="user_buttons">
          {this.renderCurrentUserButtons()}
          {this.renderLikeButton()}
        </div>
      );
    } elsif (this.props.currentUser) {
      return (
        <div>
          {this.renderLikeButton()}
        </div>
      );
    }
  }

  renderCurrentUserButtons() {
    if ((this.props.currentUser) && (this.props.currentUser.id === this.props.song.artist_id)) {
      return (
        <div className="current_user_buttons">
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
      return (<Modal><AuthForm /></Modal>);
    }
  }

  likeSong() {
    this.props.likeSong(this.props.song.id);
  }

  unlikeSong() {
    this.props.unlikeSong(this.props.song.id);
  }

  renderLikeButton() {
    if (this.props.song.liked) {
      return (<button className="page_like liked" onClick={this.unlikeSong}><i className="material-icons">favorite</i><span>Liked</span></button>);
    } else {
      return (<button className="page_like unliked" onClick={this.likeSong}><i className="material-icons">favorite</i><span>Like</span></button>);
    }
  }



  render() {

    const song = this.props.song;

    return(
      <section className="song_page_container">
        <div className="song_page_splash">
        {this.modalType()}
          <div className="song_page_header">
          <PlayButton song={song}/>
            <div className="song_page_info">
              <div className="song_page_credits">
                <h2><span><Link to={`users/${song.artist_id}`}>{song.artist}</Link></span></h2>
                <h1><span>{song.title}</span></h1>
              </div>
              <div className="song_page_additional_info">
                <h2># {song.genre}</h2>
              </div>
            </div>
          </div>
          <div className="song_image">
            <img src={song.image_url} />
          </div>
        </div>
        <section className="song_page_bottom">
          <div className="comments_section">
            <div className="comments_header">
              <div className="add_comment_form">
                <CommentForm songId={song.id}/>
              </div>
              <div className="user_buttons">

                {this.renderCurrentUserButtons()}
              </div>
            </div>
            <div className="comments">
              <div className="user_info">
                <img src={song.artist_img_url} />
                <h1>{song.artist}</h1>
              </div>
              <div className="comments_index_container">
                <CommentsIndex songId={this.props.params.song_id} />
              </div>
            </div>
          </div>
          <div className="comments_side_bar">
            Side Bar
          </div>
        </section>
      </section>
    );
  }

}

export default SongPage;
