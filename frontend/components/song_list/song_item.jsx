import React from 'react';
import { Link } from 'react-router';
import PlayButton from '../buttons/play_button';

class SongItem extends React.Component {

  constructor(props) {
    super(props);

    this.likeSong = this.likeSong.bind(this);
    this.unlikeSong = this.unlikeSong.bind(this);
  }

  dateCreate() {
    let time_diff = (new Date(Date.now()) - new Date(this.props.song.created_at))/1000;
      if (time_diff < 60) {
        return (<h4><Link className="song_date_link" to={`users/${this.props.song.artist_id}`}>{this.props.song.artist}</Link> posted this {Math.floor(time_diff)} seconds ago</h4>);
      } else if (time_diff/60 < 60) {
        return (<h4><Link className="song_date_link" to={`users/${this.props.song.artist_id}`}>{this.props.song.artist}</Link> posted this {Math.floor(time_diff/60)} minutes ago</h4>);
      } else if (time_diff/60/60 < 24 ){
        return (<h4><Link className="song_date_link" to={`users/${this.props.song.artist_id}`}>{this.props.song.artist}</Link> posted this {Math.floor(time_diff/60/60)} hours ago</h4>);
      } else {
        return (<h4><Link className="song_date_link" to={`users/${this.props.song.artist_id}`}>{this.props.song.artist}</Link> posted this {Math.floor(time_diff/60/60/24)} days ago</h4>);
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
      return (<button className="list_like liked" onClick={this.unlikeSong}><i className="material-icons">favorite</i><span>{this.props.song.likes}</span></button>);
    } else {
      return (<button className="list_like unliked" onClick={this.likeSong}><i className="material-icons">favorite</i><span>{this.props.song.likes}</span></button>);
    }
  }


  render() {
    return (
        <li className="song_item">
          <div className="song_item_date">
            <img className="song_date_img" src={this.props.song.artist_img_url}/>
            {this.dateCreate()}
          </div>
          <div className="song_item_body">
            <div className="song_item_image">
              <img src={this.props.song.image_url}/>
            </div>
            <div className="song_item_info">
              <div className="song_item_details">
                  <PlayButton song={this.props.song}/>
                <div className="song_header_info">
                  <div className="song_header_credits">
                    <div><Link to={`/users/${this.props.song.artist_id}`}>{this.props.song.artist}</Link></div>
                    <div><Link to={`/songs/${this.props.song.id}`}>{this.props.song.title}</Link></div>
                  </div>
                  <div className="song_header_genre" >
                    <h5># {this.props.song.genre}</h5>
                  </div>
                </div>
              </div>
              <div className="song_item_waveform">
                <h3>--^_--_-^__^__^_--_^_^^^__--^-__-__^^^_-_^__^_^__^</h3>
              </div>
              <footer className="song_item_footer">
                {this.renderLikeButton()}
                <h5><i className="material-icons">message</i>{this.props.song.num_comments}</h5>
              </footer>
            </div>

          </div>
      </li>
    );
  }

}

export default SongItem;
