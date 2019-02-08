import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  }
  onInputChange = term => {
    this.setState({ term });
    this.props.onSearch(term);
  }
  render() {
    return (
      <div className="search-bar">
        <div>
          <input
            onChange={e => this.onInputChange(e.target.value)}
            value={this.state.term}
          />
        </div>
      </div>
    )
  }
}
export default SearchBar;