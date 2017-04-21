import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import AudioPlayerContainer from './audio_player/audio_player_container';

const App = ({location, children}) => {

  const navBarLoad = () => {
    if (!(location.pathname === "/")) {
      return (<NavbarContainer/>);
    }
  }

  return (
    <section>
      {navBarLoad()}
      {children}
      <AudioPlayerContainer/>
    </section>
  )

};

export default App;
