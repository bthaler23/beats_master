import React from 'react';


const SongItem = (props) => {
  return (
    <li className="song_item">
      <img src={props.song.image_url}/>
      <div className="song_header">
          <img src={window.playButton}/>
        <div className="song_header_info">
          <div>{props.song.artist}</div>
          <div>{props.song.title}</div>
        </div>
      </div>
    </li>
  )

}

export default SongItem;
