import React from 'react';
import PlayButton from '../buttons/play_button';

class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {played: false};
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
        <div className="audio_player_info">
          <div>{this.props.playlist.current_song.title}</div>
          <img src={this.props.playlist.current_song.image_url} />
        </div>
      </section>
    );

  }

}

export default AudioPlayer;
