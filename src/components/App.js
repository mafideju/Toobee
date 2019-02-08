import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const key = `AIzaSyBOP2u0OMyuXoATswBIJTmxIb2xJtY4HWA`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null,
      videos: []
    }
    this.videoSearch('Morcheeba');
  }
  selectedVideo = selectedVideo => {
    this.setState({ selectedVideo })
  }
  videoSearch = term => {
    YTSearch({ key, term }, (videos) => {
      this.setState({ selectedVideo: videos[0], videos })
    })
  }
  render() {
    const videoQuery = _.debounce((term) => { this.videoSearch(term) }, 500);
    return (
      <div>
        <h3>_Toobee</h3>
        <SearchBar onSearch={videoQuery} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.selectedVideo}
        />
      </div>
    );
  }
}
export default App;