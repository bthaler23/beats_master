import React from 'react';
import { Link } from 'react-router';

const SongItem = (props) => {
  return (
    <li className="song_item">
      <img src={props.song.image_url}/>
      <div className="song_header">
          <img src={window.playButton}/>
        <div className="song_header_info">
          <div>{props.song.artist}</div>
          <div><Link to={`/stream/${props.song.id}`}>{props.song.title}</Link></div>
        </div>
      </div>
    </li>
  );

};

export default SongItem;
