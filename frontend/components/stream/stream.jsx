import React from 'react';
import SongListContainer from '../song_list/song_list_container';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import { fetchUsers } from '../../actions/user_actions';
import { Link } from 'react-router';

class Stream extends React.Component {

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchUsers();
  }





  render() {

    const all_users = this.props.users.map((user) => (
      <li key={user.id}>
        <div className="artist_info">
          <img src={user.image_url}/>
          <h2>{user.username}</h2>
        </div>
        <div className="artist_link">
          <Link to={`users/${user.id}`}>User Page</Link>
        </div>
      </li>
    ));

    return (
      <section className="stream">
        <div className="stream_container">
          <h1>Stream</h1>
          <h2>Hear the latest posts from the people you're following </h2>
          <SongListContainer songs={this.props.songs}/>
        </div>
        <sidebar className="stream_sidebar">
          <ul className="artists_to_follow">
            <h1><i className="material-icons">group</i>Check out these artists!</h1>
            {all_users}
          </ul>
        </sidebar>
      </section>
    );
  }

}

const mapStateToProps = ({songs, user}, ownProps) => {
  return {
    songs: Object.values(songs.songs),
    users: user.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
