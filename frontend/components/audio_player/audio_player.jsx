import React from 'react';


class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);

  }

  componentDidUpdate() {
    const audio = $('audio')[0];
    if (this.props.playlist.playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  renderPlay() {
    if (this.props.playlist.playing) {
      return (<img src={window.pause_button} onClick={this.handleStop} />);
    } else {
      return (<img src={window.playButton} onClick={this.handleStart} />);
    }
  }

  handleStart(e) {
    this.props.playSong(this.props.playlist.current_song);
  }

  handleStop(e) {
    this.props.stopSong();
  }

  render() {
    return (
      <section className="audio_player">
        {this.renderPlay()}
        <audio src={this.props.playlist.current_song.song_url}/>
        <img src={this.props.playlist.current_song.image_url} />
        <div className="audio_player_info">
          <div>{this.props.playlist.current_song.title}</div>
        </div>
      </section>
    );

  }
}

export default AudioPlayer;
