import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { hideModal } from '../../actions/modal_actions';

class EditUser extends React.Component {

  constructor(props) {

    super(props);
    this.state = {city: "", country: "", bio: ""};

    this.handleCity = this.handleCity.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleBio = this.handleBio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.user.id !== newProps.user.id) {
      this.setState({city: newProps.user.city, country: newProps.user.country, bio: newProps.user.bio});
    }
  }

  handleCity(e) {
    this.setState({city: e.target.value});
  }

  handleCountry(e) {
    this.setState({country: e.target.value});
  }

  handleBio(e) {
    this.setState({bio: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const updatedUser = { user: { city: this.state.city, country: this.state.country, bio: this.state.bio }};
    this.props.updateUser(this.props.user.id, updatedUser, "info").then(() => this.props.hideModal());
  }


  render() {
    return(
      <form className="edit_user_form" onSubmit={this.handleSubmit}>
        <h1> Update User </h1>
        <label>City</label>
        <input type="text" value={this.state.city} onChange={this.handleCity}/>
        <label>Country</label>
        <input type="text" value={this.state.country} onChange={this.handleCountry}/>
        <label>Bio</label>
        <input type="text" value={this.state.bio} onChange={this.handleBio}/>
        <input type="submit"/>
      </form>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUser: (userId, user, form) => dispatch(updateUser(userId, user, form)),
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);
