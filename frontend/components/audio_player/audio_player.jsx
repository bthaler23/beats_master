import React from 'react';


class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const audio = $('audio')[0];
    if (this.props.playlist.playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  handleMusic(e) {
    e.preventDefault();
    const audio = $('audio')[0];
    audio.play();
  }

  handleStop(e) {
    e.preventDefault();
    const audio = $('audio')[0];
    audio.pause();
  }

  render() {

    return (
      <section>
        <button onClick={this.handleMusic}>Stopplz</button>
        <button onClick={this.handleStop}>Startplz</button>
        <audio src={this.props.playlist.current_song.song_url}/>
      </section>
    );

  }
}

export default AudioPlayer;
