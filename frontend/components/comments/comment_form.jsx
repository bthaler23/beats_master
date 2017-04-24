import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import React from 'react';


class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.addComment = this.addComment.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.state = {body: ""};
  }

  handleBody(e) {
    this.setState({body: e.target.value});
  }

  addComment(e) {
    e.preventDefault();
    let comment = {comment: {song_id: this.props.songId, body: this.state.body}};
    this.props.createComment(comment);
  }

  render() {
    return (
      <form onSubmit={this.addComment}>
        <input type="text" value={this.state.body} onChange={this.handleBody} placeholder="Add Comments Here"/>
        <input type="submit"/>
      </form>
    );
  }


}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
