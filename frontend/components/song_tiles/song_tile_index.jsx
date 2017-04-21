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
      <section>
        <div className="song_tile_index_header">
          <h1>Now that's what I call music!</h1>
        </div>
        <div className="song_tile_index">
          {all_songs}
        </div>
      </section>
    );
  }

}
// const all_songs = [];
// debugger
// if (!(this.props.songs === [])) {
//   let song;
//   for (let i = 0; i < 8; i++) {
//     song = this.props.songs[i];
//     all_songs.push(<SongTile key={song.id} song={song}/>);
//   }
// }

export default SongTileIndex;
