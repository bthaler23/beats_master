import React from 'react';
import SongItem from './song_item';

class SongList extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      if (this.props.artist_id) {
        this.props.fetchSongs(this.props.artist_id);
      } else {
        this.props.fetchSongs();
      }
    }

    // componentWillUnmount() {
    //   this.props.fetchSongs(0);
    // }


    render() {

      const all_songs = this.props.songs.map((song) => (
        <SongItem key={song.id} song={song} playSong={this.props.playSong} stopSong={this.props.stopSong} playlist={this.props.playlist}/>
      ));

      return (
        <ul>{all_songs}</ul>
      );
    }

}

export default SongList;
