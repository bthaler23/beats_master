import React from 'react';
import PlayButton from '../buttons/play_button';

class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {played: false, song_length: "0:00"};
  }

  componentDidUpdate() {
    const audio = $('audio')[0];
    if (this.props.playlist.playing) {
      audio.play();
      if (!this.state.played) {
        this.setState({played: true});
      }
    } else {
      audio.pause();
    }
  }

  getDuration(audio) {
      if (audio) {
        let duration = audio.duration;
        let minutes = Math.floor(duration/60);
        let seconds = Math.floor(duration%60);

        if (minutes < 10) {
          minutes = "0" + parseInt(minutes);
        }
        if (seconds < 10) {
          seconds = "0" + parseInt(seconds);
        }
        this.setState({song_length: (`${minutes}` + ":" + `${seconds}`)});
      }
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
        <audio src={this.props.playlist.current_song.song_url}/>
        <div className="tracking_buttons">
          <PlayButton song={this.props.playlist.current_song} />
        </div>
        <div className="audio_progress_bar">
          <div>0:00 ----------------------------------------------------------------------------------------  </div>
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
