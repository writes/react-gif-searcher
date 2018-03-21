import React, { Component } from 'react';
import SearchBar from './containers/search_bar';
import GifList from './containers/gif_list';
import './App.css';

const GIPHY_API_KEY = 'eIRj58ROhk5HPIC7FqKTJDDH4bcGYc7W';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
    this.giphySearch('WeWork');
  }

  debounce(func, wait = 300) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }

  giphyFetch(url) {
    fetch(`http://api.giphy.com${url}&api_key=${GIPHY_API_KEY}`, {
      method: 'get'
    })
      .then(results => {
        return results.json();
      })
      .then(search => {
        let gifs = search.data.map(gif => {
          return {
            id: gif.id,
            url: gif.images.original.url,
            href: gif.bitly_url
          };
        });
        console.log(gifs);
        this.setState({ gifs: gifs });
      });
  }

  giphySearch(term) {
    const url = `/v1/gifs/search?q=${term}`;
    this.giphyFetch(url);
  }

  giphyTrending() {
    const url = '/v1/gifs/trending?';
    this.giphyFetch(url);
  }

  render() {
    const giphySearch = this.debounce(term => {
      this.giphySearch(term);
    });

    return (
      <div className="App">
        <SearchBar onSearchTermChange={giphySearch} />
        <GifList />
      </div>
    );
  }
}
