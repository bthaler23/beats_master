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
        <h1>Stream</h1>
        <SongListContainer songs={this.props.songs}/>
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
