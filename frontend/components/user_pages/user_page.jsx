import React from 'react';

class UserPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.user_id);
  }

  render() {
    return (<h1>{this.props.user.username}</h1>);
  }


}


export default UserPage;
