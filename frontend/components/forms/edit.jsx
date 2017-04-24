import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import { editSong } from '../../actions/song_actions';

class Edit extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: props.song.title, genre: props.song.genre };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.song.id !== newProps.song.id) {
      this.setState({title: newProps.song.title, genre: newProps.song.genre});
    }
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
    this.props.editSong(this.props.params.song_id, updated_song);
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
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideModal: () => dispatch(hideModal()),
  editSong: (songId, song) => dispatch(editSong(songId, song))
});



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit));
