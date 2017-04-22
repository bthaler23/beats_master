import React from 'react';
import SongListContainer from '../song_list/song_list_container';

class UserPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.user_id);
    this.props.fetchSongs(this.props.params.user_id);
  }

  render() {
    return (
      <section>
        <h1>{this.props.user.username}</h1>
        <SongListContainer songs={this.props.songs}/>
      </section>
    );
  }


}


export default UserPage;
