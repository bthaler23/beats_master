import React from 'react';
import PlayButton from '../buttons/play_button';
import { connect } from 'react-redux';
class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {played: false};
  }

  componentDidMount() {
    //This interval is always running always - is this bad
    setInterval(() => {
      if (this.props.playlist.playing) {
        this.props.getCurrentTime(this.refs.audio_player.currentTime);
      }
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const audio = this.refs.audio_player;
    if (this.props.playlist.playing) {
      audio.play().then(() => {
        if (prevProps.playlist.current_song.id != this.props.playlist.current_song.id) {
          this.props.startSong(audio.duration);
        }
      });
      if (!this.state.played) {
        this.setState({played: true});
      }
    } else {
      audio.pause();
    }

  }

  parseDuration(duration) {
    let minutes = Math.floor(duration/60);
    let seconds = Math.floor(duration%60);
    if (minutes < 10) {
      minutes = "0" + parseInt(minutes);
    }
    if (seconds < 10) {
      seconds = "0" + parseInt(seconds);
    }
    return (`${minutes}` + ":" + `${seconds}`);
  }

  played() {
    if (this.state.played) {
      return "audio_player shown";
    } else {
      return "audio_player";
    }
  }


  render() {
    return (
      <section className={this.played()}>
        <audio ref="audio_player" src={this.props.playlist.current_song.song_url}/>
        <div className="tracking_buttons">
          <PlayButton song={this.props.playlist.current_song} />
        </div>
        <div className="audio_progress_bar">
          <div>{this.parseDuration(this.props.playlist.current_time)} ----------------------------------------------------------------------------------------{this.parseDuration(this.props.playlist.duration)} </div>
        </div>
        <div className="audio_player_info">
          <img src={this.props.playlist.current_song.image_url} />
          <div className="audio_player_credits">
            <h1>{this.props.playlist.current_song.artist}</h1>
            <h2>{this.props.playlist.current_song.title}</h2>
          </div>
        </div>
      </section>
    );

  }

}

export default AudioPlayer;
