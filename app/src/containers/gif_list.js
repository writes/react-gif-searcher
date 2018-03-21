import React, { Component } from 'react';
import { connect } from 'react-redux';

export class GifList extends Component {
  renderList() {
    return this.props.gifs.map(gifs => {
      <li>
        <a href={gif.id} target="_blank">
          <div key={gif.id}>
            <img src={gif.id} alt="testing this guy on all of them" />
          </div>
        </a>
      </li>;
    });
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

export default connect(mapStateToProps)(GifList);
