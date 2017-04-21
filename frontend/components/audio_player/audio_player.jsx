import React from 'react';
import PlayButton from '../buttons/play_button';

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


  render() {
    return (
      <section className="audio_player">
        <PlayButton song={this.props.playlist.current_song} />
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
