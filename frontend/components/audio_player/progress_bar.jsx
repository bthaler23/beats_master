import React from 'react';


class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
  }


  renderWidth() {

    let percent = this.props.current_time/this.props.duration * 100;
    return `${percent}%`;
    
  }

  render() {
    return (
      <div className="progress_bar_container">
        <div style={{width: this.renderWidth() }} className="progress_bar"/>
      </div>
    );

  }


}

export default ProgressBar;
