import { connect } from 'react-redux';
import React from 'react';

class CommentsIndex extends React.Component {

  render() {

    const comments = this.props.comments;
    const all_comments = comments.slice(comments.length/2, comments.length).map((comment) => (
      <li className="comment" key={comment.id}><h1>{comment.user}</h1><h2>{comment.body}</h2></li>
    ));

    return (
      <ul className="comments_index">
        {all_comments}
        <li className="comments_number">{this.props.comments.length} comments</li>
      </ul>
    );
  }

}

const mapStateToProps = ({comments}, ownProps) => {
  return {
    comments: Object.values(comments)
  };
};


export default connect(
  mapStateToProps,
  {}
)(CommentsIndex);
