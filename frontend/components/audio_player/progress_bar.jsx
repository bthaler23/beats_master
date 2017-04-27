import React from 'react';


class ProgressBar extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  renderWidth() {

    let percent = this.props.current_time/this.props.duration * 100;
    return `${percent}%`;

  }

  handleClick(e) {
    let progress_bar = $('.progress_bar_container')[0];
    let starting_pos = progress_bar.offsetLeft;
    let progress_width = progress_bar.clientWidth;
    let new_time = ((e.clientX - starting_pos) * this.props.duration)/progress_width;
    // debugger
    $('audio')[0].currentTime = new_time;
    this.props.getCurrentTime(new_time);
  }

  render() {
    return (
      <div className="progress_bar_outside" onClick={this.handleClick}>
        <div className="progress_bar_container" >
          <div style={{width: this.renderWidth() }} className="progress_bar"/>
        </div>
      </div>
    );

  }


}

export default ProgressBar;
