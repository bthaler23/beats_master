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
      <section className="user_page">
        <section className="user_splash_container">
          <div className="user_splash">
          <img className="user_splash_image" src={this.props.user.image_url}/>
          <h1 className="user_splash_name"><span>{this.props.user.username}</span></h1>
          </div>
        </section>
        <section className="user_info_container">
          <article className="user_info_header">
            <h1>Songs</h1>
          </article>
          <article className="user_info_section">
            <div className="user_songs">
              <SongListContainer songs={this.props.songs}/>
            </div>
            <aside className="user_stats">
              User Stats
            </aside>
          </article>
        </section>
      </section>
    );
  }


}


export default UserPage;
