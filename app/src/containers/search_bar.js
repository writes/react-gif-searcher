import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearch, fetchTrending } from '../actions/index';
import RecentSearchList from './recent_search_list';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTrending();

    // value of input
    this.state = { term: '', searches: [] };

    // bind context of functions
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // onInputChange set state
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // prevents submission of form to backend
    event.preventDefault();

    // update array of recent searches
    let searches = [...this.state.searches];
    if (this.state.term.length !== 0 || this.state.term.trim()) {
      if (searches.indexOf(this.state.term.toLowerCase()) < 0) {
        if (searches.length > 15) {
          searches.shift();
        }

        searches.push(this.state.term.toLowerCase());
      }

      this.props.fetchSearch(this.state.term);
    }

    this.setState({ searches: searches });
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="search-section">
        <div className="search-form-wrapper">
          <form className="search-form" onSubmit={this.onFormSubmit}>
            <input
              placeholder="Search"
              id="search"
              className="search-form-input"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button type="submit" className="search-form-button">
              <img
                className="search-form-button-img"
                src="https://i.giphy.com/media/3oKGz8Mr8stJzA0JDW/giphy.webp"
                alt="search"
              />
            </button>
          </form>
        </div>
        <div className="trending-search-button-wrapper">
          <button
            className="trending-search-button"
            onClick={this.props.fetchTrending}
          >
            Trending
          </button>
        </div>
        <div className="recent-search-group-wrapper">
          <RecentSearchList searchTerms={this.state.searches} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSearch, fetchTrending }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
