import React from 'react';
import { connect } from 'react-redux';
import { playSong, stopSong }  from '../../actions/playlist_actions';


class PlayButton extends React.Component {

  constructor(props) {
    super(props);

    this.playSong = this.playSong.bind(this);
    this.stopSong = this.stopSong.bind(this);

  }

  currentSongCheck() {

    if (this.props.playlist.current_song.id === this.props.song.id && this.props.playlist.playing) {
      return (<img src={window.pause_button} onClick={this.stopSong}/>);
    } else {
      return (<img src={window.playButton} onClick={this.playSong}/>);
    }
  }

  playSong(e) {
    this.props.playSong(this.props.song);
  }

  stopSong() {
    this.props.stopSong();
  }


  render() {
    return (
      <div>
        {this.currentSongCheck()}
      </div>
    );
  }

}


const mapStateToProps = ({playlist}, ownProps) => {
  return {
    playlist,
    song: ownProps.song
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    playSong: (song) => dispatch(playSong(song)),
    stopSong: () => dispatch(stopSong())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
