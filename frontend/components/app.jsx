import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import AudioPlayerContainer from './audio_player/audio_player_container';

const App = ({location, children}) => {


  if (!(location.pathname === "/")) {
    return (
      <section>
        <NavbarContainer />
        <AudioPlayerContainer />
        {children}
      </section>
    );
  } else {
    return (
      <section>
      <AudioPlayerContainer />
        {children}
      </section>
    );
  }
};

export default App;
