import React from 'react';
import SongTile from './song_tile';


class SongTileIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {

    const all_songs = this.props.songs.map((song) => (
      <SongTile key={song.id} song={song}/>
    ));

    return (
      <div className="song_tile_index">{all_songs}</div>
    );
  }

}

export default SongTileIndex;
