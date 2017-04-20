import React from 'react';
import { withRouter } from 'react-router';


class SongTileWithoutRouter extends React.Component{

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

  }


  handleClick(e) {
    e.preventDefault();
    this.props.router.push(`/stream/${this.props.song.id}`);
  }

  render() {
    return (
      <div className="song_tile" onClick={this.handleClick}>
        <img src={this.props.song.image_url}/>
        <div className="song_tile_info">
          <h4>{this.props.song.title}</h4>
          <h5>{this.props.song.artist}</h5>
        </div>
      </div>
    );
  }

}

const SongTile = withRouter(SongTileWithoutRouter);

export default SongTile;
