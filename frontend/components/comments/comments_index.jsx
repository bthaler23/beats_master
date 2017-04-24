import { connect } from 'react-redux';
import React from 'react';

class CommentsIndex extends React.Component {

  render() {

    const all_comments = this.props.comments.map((comment) => (
      <li key={comment.id}>{comment.body} {comment.user}</li>
    ));

    return (
      <div>
        {all_comments}
      </div>
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
