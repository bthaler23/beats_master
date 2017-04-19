import React from 'react';
import SongListContainer from '../song_list/song_list_container'

class Stream extends React.Component {


  render() {
    return (
      <section className="stream">
        <h1>Stream</h1>
        <SongListContainer/>
      </section>
    );
  }

}

export default Stream;
