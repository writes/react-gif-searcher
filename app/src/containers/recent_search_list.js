import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearch } from '../actions/index';

class RecentSearchList extends Component {
  constructor(props) {
    super(props);
    this.onRecentSearch = this.onRecentSearch.bind(this);
  }

  onRecentSearch(event) {
    this.props.fetchSearch(event.target.value);
  }

  render() {
    var terms = this.props.searchTerms || [];
    terms = terms.sort();
    return (
      <div className="recent-search-button-wrapper">
        {terms.map(term => {
          return (
            <button
              className="recent-search-button"
              key={term}
              value={term}
              onClick={this.onRecentSearch}
            >
              {term}
            </button>
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecentSearchList);
