import React from 'react';


class SongPage extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //Fetches from server, but has list of song in state -- maybe fix
    this.props.fetchSong(this.props.params.song_id);
  }


  render() {
    return(
      <section>
        <div className="song_page_splash">
          <div className="song_page_header">
          <img className="play_button" src={window.playButton}/>
            <div className="song_credits">
              <h2><span>{this.props.song.artist}</span></h2>
              <h1><span>{this.props.song.title}</span></h1>
            </div>
          </div>
          <div className="song_image">
            <img src={this.props.song.image_url} />
          </div>
        </div>
        <audio src={this.props.song.song_url} autoPlay />
      </section>
    );
  }

}

export default SongPage;
