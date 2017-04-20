import React from 'react';
import { Link } from 'react-router';

class SongItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleSong = this.handleSong.bind(this);
  }

  handleSong(e) {
    e.preventDefault();
    this.props.playSong(this.props.song);
  }

  currentSongCheck() {
    if (this.props.current_song.id === this.props.song.id) {
      return (<img src={window.pause_button} onClick={this.handleSong}/>);
    } else {
      return (<img src={window.playButton} onClick={this.handleSong}/>);
    }
  }



  render() {
    return (
      <li className="song_item">
        <img src={this.props.song.image_url} onClick={this.handleSong}/>
        <div className="song_header">
            {this.currentSongCheck()}
          <div className="song_header_info">
            <div><Link to={`/users/${this.props.song.artist_id}`}>{this.props.song.artist}</Link></div>
            <div><Link to={`/songs/${this.props.song.id}`}>{this.props.song.title}</Link></div>
          </div>
        </div>
      </li>
    );
  }

}

export default SongItem;
