import { connect } from 'react-redux';
import { deleteComment, fetchComments } from '../../actions/comment_actions';
import React from 'react';
import Comment from './comment';


class CommentsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchComments(this.props.songId);
  }

  render() {

    const comments = this.props.comments;
    const all_comments = comments.map((comment) => (
        <Comment key={comment.id} comment={comment} deleteComment={this.props.deleteComment} current_user_id={this.props.current_user_id} />
    ));

    return (
      <ul className="comments_index">
        {all_comments}
        <li className="comments_number">{this.props.comments.length} comments</li>
      </ul>
    );
  }

}

const mapStateToProps = ({session, comments}, ownProps) => {
  //Is this a bad implementation of this?
  if (session.currentUser) {
    return {
      comments: Object.values(comments),
      current_user_id: session.currentUser.id
    };
  } else {
    return {
      comments: Object.values(comments),
      current_user_id: null
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchComments: (song_id) => dispatch(fetchComments(song_id))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);
