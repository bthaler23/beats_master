import React from 'react';
import { Link } from 'react-router';
import PlayButton from '../buttons/play_button';

class SongItem extends React.Component {

  constructor(props) {
    super(props);

  }

  dateCreate() {
    let time_diff = (new Date(Date.now()) - new Date(this.props.song.created_at))/1000;
      if (time_diff < 60) {
        return (<h4>{this.props.song.artist} posted this {Math.floor(time_diff)} seconds ago</h4>);
      } else if (time_diff/60 < 60) {
        return (<h4>{this.props.song.artist} posted this {Math.floor(time_diff/60)} minutes ago</h4>);
      } else {
        return (<h4>{this.props.song.artist} posted this {Math.floor(time_diff/60/60)} hours ago</h4>);
      }
  }


  render() {
    return (
        <li className="song_item">
          <div className="song_date">
            <img className="song_date_img" src={this.props.song.artist_img_url}/>
            {this.dateCreate()}
          </div>
          <div className="song_header_all">
            <img src={this.props.song.image_url}/>
            <div className="song_header">
                <PlayButton song={this.props.song}/>
              <div className="song_header_info">
                <div className="song_header_credits">
                  <div><Link to={`/users/${this.props.song.artist_id}`}>{this.props.song.artist}</Link></div>
                  <div><Link to={`/songs/${this.props.song.id}`}>{this.props.song.title}</Link></div>
                </div>
              </div>
            </div>
          </div>
      </li>
    );
  }

}

export default SongItem;
