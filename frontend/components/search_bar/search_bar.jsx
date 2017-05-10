import React from 'react';
import { searchSongs } from '../../util/song_api_util';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {inputValue: "", resultSongs: []};

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState( {inputValue: e.target.value} );
    if (e.target.value.length > 0 ) {
      searchSongs(e.target.value).then((foundSongs) => {
        this.setState({resultSongs: foundSongs});
      });
    } else {
      this.setState({resultSongs: []});
    }
  }


  handleClick(song_id) {
    return (e) => {
      e.preventDefault();
      this.setState({inputValue: "", resultSongs: []});
      //Why doesn't this push to a new song
      this.props.router.push(`/songs/${song_id}`);
    };
  }

  handleFirst() {
    if (this.state.inputValue.length > 0 ) {
      return (<li className="search_query">Search for "{this.state.inputValue}"</li>);
    }
  }


  render() {
    const foundSongs = this.state.resultSongs.map((song) => (
      <li key={`${song.id}`} onClick={this.handleClick(song.id)}>{song.title}</li>
    ));


    return (
        <div className="search_bar_container">
          <div className="search_bar_input">
            <input className="search_bar" type="text" placeholder="Search for songs, artists, bands, podcasts" value={this.state.inputValue} onChange={this.handleInput}/>
            <i className="material-icons">search</i>
          </div>
          <ul className="search_results">
            {this.handleFirst()}
            {foundSongs}
          </ul>
        </div>
    );
  }

}

export default withRouter(SearchBar);
