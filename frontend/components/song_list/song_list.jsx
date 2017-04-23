import React from 'react';
import SongItem from './song_item';

class SongList extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      const all_songs = this.props.songs.map((song) => (
        <SongItem key={song.id} song={song} playlist={this.props.playlist}/>
      ));

      return (
        <ul className="song_list_container">{all_songs}</ul>
      );
    }

}

export default SongList;
