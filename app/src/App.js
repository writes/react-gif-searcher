import React, { Component } from 'react';

import Header from './components/header';
import RecentSearchList from './containers/recent_search_list';
import SearchBar from './containers/search_bar';
import GifList from './containers/gif_list';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Header />
          <SearchBar />
          <RecentSearchList />
          <GifList />
        </div>
      </div>
    );
  }
}
