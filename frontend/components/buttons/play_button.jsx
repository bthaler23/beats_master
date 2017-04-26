import React from 'react';
import { connect } from 'react-redux';
import { populateQ } from '../../actions/song_actions';
import { playSong, stopSong }  from '../../actions/current_song_actions';


class PlayButton extends React.Component {

  constructor(props) {
    super(props);

    this.playSong = this.playSong.bind(this);
    this.stopSong = this.stopSong.bind(this);

  }

  currentSongCheck() {

    if (this.props.current_song.current_song.id === this.props.song.id && this.props.current_song.playing) {
      return (<img src={window.pause_button} onClick={this.stopSong}/>);
    } else {
      return (<img src={window.playButton} onClick={this.playSong}/>);
    }
  }

  playSong(e) {
    if (this.props.current_song.current_song.id !== this.props.song.id) {
      this.props.playSong(this.props.song, this.props.current_song.current_song);
    } else {
      this.props.playSong(this.props.song);
    }
    this.props.populateQ(this.props.song);
  }

  stopSong() {
    this.props.stopSong();
  }


  render() {
    return (
      <div className="play_button">
        {this.currentSongCheck()}
      </div>
    );
  }

}


const mapStateToProps = ({current_song}, ownProps) => {
  return {
    current_song,
    song: ownProps.song
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    playSong: (song, last_song) => dispatch(playSong(song, last_song)),
    stopSong: () => dispatch(stopSong()),
    populateQ: (song) => dispatch(populateQ(song))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
