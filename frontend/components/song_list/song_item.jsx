import React from 'react';
import { Link } from 'react-router';

class SongItem extends React.Component {

  constructor(props) {
    super(props);

    this.playSong = this.playSong.bind(this);
    this.stopSong = this.stopSong.bind(this);
  }

  // handleSong(e) {
  //   e.preventDefault();
  //   this.props.playSong(this.props.song);
  // }

  currentSongCheck() {
    if (this.props.playlist.current_song.id === this.props.song.id && this.props.playlist.playing) {
      return (<img src={window.pause_button} onClick={this.stopSong}/>);
    } else {
      return (<img src={window.playButton} onClick={this.playSong}/>);
    }
  }

  playSong(e) {
    this.props.playSong(this.props.song);
  }

  stopSong() {
    this.props.stopSong();
  }


  render() {
    return (
      <li className="song_item">
        <img src={this.props.song.image_url}/>
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
