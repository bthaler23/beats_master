import React from 'react';
import PlayButton from '../buttons/play_button';


class SongPage extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //Fetches from server if no songs were preloaded - Fetches songs from state if songs were preloaded
    //Going to have to do a check later to see if song was in the state
    if (this.props.preloaded) {
      this.props.receiveSong(this.props.params.song_id);
    } else {
      this.props.fetchSong(this.props.params.song_id);
    }
  }

  //Check this if this is good
  componentWillUpdate() {
    if (this.props.params.song_id != this.props.song.id) {
      if (this.props.preloaded) {
        this.props.receiveSong(this.props.params.song_id);
      } else {
        this.props.fetchSong(this.props.params.song_id);
      }
    }
  }

  render() {

    return(
      <section>
        <div className="song_page_splash">
          <div className="song_page_header">
          <PlayButton song={this.props.song}/>
            <div className="song_credits">
              <h2><span>{this.props.song.artist}</span></h2>
              <h1><span>{this.props.song.title}</span></h1>
            </div>
          </div>
          <div className="song_image">
            <img src={this.props.song.image_url} />
          </div>
        </div>
          { (this.props.currentUser) && ((this.props.currentUser.id === this.props.song.artist_id) && <h1>Edit</h1> )}
      </section>
    );
  }

}

export default SongPage;
