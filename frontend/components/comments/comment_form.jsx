import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import { showModal } from '../../actions/modal_actions';
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
    this.props.createComment(comment).then(() => {
      this.setState({body: ""});
    });
  }

  render() {

    if (this.props.currentUser) {
      return (
        <form onSubmit={this.addComment}>
          <input type="text" value={this.state.body} onChange={this.handleBody} placeholder="Write a comment"/>
          <input type="submit"/>
        </form>
      );
    } else {
      return (
          <p className="comments_auth">
            <button onClick={this.props.showModal}>Sign in</button>
             or
            <button onClick={this.props.showModal}>Create an Account</button>
            to write comments!
          </p>


      );
    }
  }


}

const mapStateToProps = ({session}, ownProps) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    showModal: () => dispatch(showModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
