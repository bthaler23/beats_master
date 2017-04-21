import React from 'react';
import { Link } from 'react-router';
import PlayButton from '../buttons/play_button';

class SongItem extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <li className="song_item">
        <img src={this.props.song.image_url}/>
        <div className="song_header">
            <PlayButton song={this.props.song}/>
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
