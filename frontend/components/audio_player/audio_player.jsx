import React from 'react';


class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);

  }

  handleMusic(e) {
    e.preventDefault();
    const audio = $('audio')[0];
    audio.pause();
  }

  render() {

    return (
      <section>
        <button onClick={this.handleMusic}>Stopplz</button>
        <audio src={this.props.current_song.song_url} autoPlay />
      </section>
    );

  }
}

export default AudioPlayer;
