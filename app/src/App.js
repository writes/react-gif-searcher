import React, { Component } from 'react';

import './App.css';

const GIPHY_API_KEY = 'eIRj58ROhk5HPIC7FqKTJDDH4bcGYc7W';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    this.giphySearch('spurs');
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
        this.setState({ gifs: gifs });
      });
  }

  giphySearch(search) {
    const url = `/v1/gifs/search?q=${search}`;
    this.giphyFetch(url);
  }

  giphyTrending() {
    const url = '/v1/gifs/trending?';
    this.giphyFetch(url);
  }

  search() {
    console.log(this);

    const query = document.getElementById('search') || {};
    this.giphySearch(query.value);
  }

  render() {
    return (
      <div className="App">
        <input id="search" type="text" />
        <button id="searchSubmit" onClick={() => this.search()}>
          Go
        </button>
        {this.state.gifs.map(gif => {
          return (
            <a href={gif.href} target="_blank">
              <div key={gif.id}>
                <img src={gif.url} alt="something" />
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default App;
