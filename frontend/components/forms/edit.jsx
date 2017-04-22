import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';
import { updateSong } from '../../util/song_api_util';
import { withRouter } from 'react-router';

class Edit extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: props.song.title, genre: props.song.genre };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  handleGenre(e) {
    this.setState({genre: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.hideModal();
    const updated_song = {song: {title: this.state.title, genre: this.state.genre}};
    updateSong(this.props.params.song_id, updated_song)
      .then(() => window.location.reload());
      //shitty code - fix this later
  }

  render() {
    return (
      <form className="edit_form" onSubmit={this.handleSubmit}>
        <h1> Edit </h1>
        <label> Title </label>
        <input type="text" onChange={this.handleChange} value={this.state.title}/>
        <label> Genre </label>
        <input type="text" onChange={this.handleGenre} value={this.state.genre}/>
        <input type="submit"/>
      </form>
    );
  }

}

const mapStateToProps = ({songs}, ownProps) => ({
  song: songs.songDetail
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideModal: () => dispatch(hideModal())
});



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit));
