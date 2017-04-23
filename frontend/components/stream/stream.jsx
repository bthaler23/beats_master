import React from 'react';
import SongListContainer from '../song_list/song_list_container';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';

class Stream extends React.Component {

  componentDidMount() {
    this.props.fetchSongs();
  }


  render() {
    return (
      <section className="stream">
        <div className="stream_container">
          <h1>Stream</h1>
          <h2>Hear the latest posts from the people you're following </h2>
          <SongListContainer songs={this.props.songs}/>
        </div>
        <div className="artists_to_follow">
          Artists Here
        </div>
      </section>
    );
  }

}

const mapStateToProps = ({songs}, ownProps) => {
  return {
    songs: Object.values(songs.songs)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSongs: () => dispatch(fetchSongs())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
