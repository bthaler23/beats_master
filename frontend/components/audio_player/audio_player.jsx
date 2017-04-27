import React from 'react';
import PlayButton from '../buttons/play_button';
import { connect } from 'react-redux';
import ProgressBar from './progress_bar';


class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {played: false};
    this.playNextSong = this.playNextSong.bind(this);
    this.playPreviousSong = this.playPreviousSong.bind(this);
  }

  componentDidMount() {
    //This interval is always running always - is this bad
    setInterval(() => {
      if (this.props.current_song.playing) {
        this.props.getCurrentTime(this.refs.audio_player.currentTime);
      }
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const audio = this.refs.audio_player;
    if (this.props.current_song.playing) {
      audio.play().then(() => {
        if (prevProps.current_song.current_song.id != this.props.current_song.current_song.id) {
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

  playNextSong() {
    if (this.props.q_counter < this.props.q.length - 1) {
      this.props.setQCount(this.props.q_counter + 1);
      this.props.playSong(this.props.q[this.props.q_counter + 1]);
    } else {
      this.props.setQCount(0);
      this.props.playSong(this.props.q[0]);
    }
  }

  playPreviousSong() {
    if (this.props.q_counter === 0 ) {
      this.props.setQCount(this.props.q.length - 1);
      this.props.playSong(this.props.q[this.props.q.length - 1]);
    } else {
      this.props.setQCount(this.props.q_counter - 1);
      this.props.playSong(this.props.q[this.props.q_counter -1]);
    }
  }

  render() {
    return (
      <section className={this.played()}>
        <audio ref="audio_player" src={this.props.current_song.current_song.song_url} onEnded={this.playNextSong}/>
        <div className="tracking_buttons">
          <button className="skip_buttons" onClick={this.playPreviousSong}><i className="material-icons">skip_previous</i></button>
          <PlayButton song={this.props.current_song.current_song}/>
          <button className="skip_buttons" onClick={this.playNextSong} ><i className="material-icons">skip_next</i></button>
        </div>
        <div className="audio_progress_bar">
          <h1>{this.parseDuration(this.props.current_song.current_time)}</h1>
            <ProgressBar current_time={this.props.current_song.current_time} duration={this.props.current_song.duration}/>
          <h1>{this.parseDuration(this.props.current_song.duration)} </h1>
        </div>
        <div className="audio_player_info">
          <img src={this.props.current_song.current_song.image_url} />
          <div className="audio_player_credits">
            <h1>{this.props.current_song.current_song.artist}</h1>
            <h2>{this.props.current_song.current_song.title}</h2>
          </div>
        </div>
      </section>
    );

  }

}

export default AudioPlayer;
