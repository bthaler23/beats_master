import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import SongListContainer from '../song_list/song_list_container'

class Stream extends React.Component {


  render() {
    return (
      <section className="stream">
        <NavbarContainer/>
        <h1>Stream</h1>
        <SongListContainer/>
      </section>
    );
  }

}

export default Stream;
