import React from 'react';
import { searchSongs } from '../../util/song_api_util';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {inputValue: "", resultSongs: []};

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState( {inputValue: e.target.value} );
    if (e.target.value.length > 0 ) {
      searchSongs(e.target.value).then((foundSongs) => {
        this.setState({resultSongs: foundSongs});
        console.log(this.state.resultSongs);
      });
    } else {
      this.setState({resultSongs: []});
    }
  }


  render() {

    const foundSongs = this.state.resultSongs.map((song) => (
      <li><Link to={`songs/${song.id}`}>{song.title}</Link></li>
    ));


    return (
      <div className="landing_search_container">
        <div className="landing_search">
          <input type="text" placeholder="Search for songs, artists, bands, podcasts" value={this.state.inputValue} onChange={this.handleInput}/>
          <ul className="search_results">
            {foundSongs}
          </ul>
        </div>
      </div>
    );
  }

}

export default SearchBar;
