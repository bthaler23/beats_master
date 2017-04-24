import React from 'react';
import { withRouter } from 'react-router';
import PlayButton from '../buttons/play_button';


class SongTileWithoutRouter extends React.Component{

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

  }


  handleClick(e) {
    e.preventDefault();
    this.props.router.push(`/songs/${this.props.song.id}`);
  }

  render() {
    return (
      <div className="song_tile_container" >
        <div className="song_tile" >
          <img src={this.props.song.image_url} onClick={this.handleClick}/>
          <div className="song_tile_info">
            <h4>{this.props.song.title}</h4>
            <h5>{this.props.song.artist}</h5>
          </div>
        </div>
        <div className="song_tile_play_button">
          <PlayButton song={this.props.song} />
        </div>
      </div>
    );
  }

}

const SongTile = withRouter(SongTileWithoutRouter);

export default SongTile;
