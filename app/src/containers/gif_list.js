import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectGif } from '../actions/index';
import { bindActionCreators } from 'redux';

class GifList extends Component {
  renderList() {
    return this.props.gifs.map(gif => {
      return (
        <li>
          <a href={gif.href} target="_blank">
            <div key={gif.id}>
              <img src={gif.url} alt="testing" />
            </div>
          </a>
        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return { gifs: state.gifs };
}

// returned is props on GifList
function mapDispatchToProps(dispatch) {
  // selectGif result passed to all reducers
  return bindActionCreators({ selectGif: selectGif }, dispatch);
}

// promote GifList from a component to a container
// Make selectGif available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(GifList);
