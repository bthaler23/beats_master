import React from 'react';
import SongItem from './song_item';

class SongList extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {

      const all_songs = this.props.songs.reverse().map((song) => (
        <SongItem key={song.id} song={song} current_song={this.props.current_song}/>
      ));

      return (
        <ul className="song_list_container">{all_songs}</ul>
      );
    }

}

export default SongList;
