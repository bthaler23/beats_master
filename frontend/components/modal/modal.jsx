import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';


class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    if (this.props.show) {
      $('.background').removeClass('hide');
      $('.modal_form').removeClass('none');
    } else {
      $('.background').addClass('hide');
      $('.modal_form').addClass('none');
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.hideModal();
  }


  render () {
      return (
        <div>
          <div className="background hide" onClick={this.handleClick}></div>
          <div className="modal_form none"><this.props.form /></div>
        </div>
      );
  }

}


const mapStateToProps = ({modal}, ownProps) => {
  return {
    form: ownProps.form,
    show: modal.show
  };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
