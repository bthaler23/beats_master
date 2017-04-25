import React from 'react';


class Comment extends React.Component {

  constructor(props) {
    super(props);

    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment() {
    this.props.deleteComment(this.props.comment.id);
  }

  renderDelete() {
    if (this.props.comment.user_id === this.props.current_user_id) {
      return (<button onClick={this.deleteComment}>Delete Comment</button>);
    }
  }

  render() {
    const comment = this.props.comment;



    return (
      <li className="comment">
        <div className="comment_body">
          <h1>{comment.user}</h1>
          <h2>{comment.body}</h2>
        </div>
        <div className="comment_buttons">
          {this.renderDelete()}
        </div>
      </li>
    );
  }

}

export default Comment;
