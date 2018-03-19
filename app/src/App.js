import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import SearchBar from './containers/search_bar';

const GIPHY_API_KEY = 'eIRj58ROhk5HPIC7FqKTJDDH4bcGYc7W';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
