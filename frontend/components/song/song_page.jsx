import React from 'react';


class SongPage extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchSong(this.props.params.song_id)
  }


  render() {
    return(
      <h1> {this.props.song.title} </h1>
    )
  }

}

export default SongPage;
