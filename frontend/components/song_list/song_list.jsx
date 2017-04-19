import React from 'react';
import SongItem from './song_item';

class SongList extends React.Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      this.props.fetchSongs()
    }

    render() {

      const all_songs = this.props.songs.map((song) => (
        <SongItem key={song.id} song={song}/>
      ));

      return (
        <ul>{all_songs}</ul>
      );
    }

}

export default SongList;
