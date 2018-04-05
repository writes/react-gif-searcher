import React, { Component } from 'react';
import { connect } from 'react-redux';

class GifList extends Component {
  render() {
    const gifs = this.props.gifs || [];
    return (
      <div className="gif-list-wrapper">
        <ul className="gif-list">
          {gifs.map(gif => {
            return (
              <li className="gif-list-item" key={gif.id}>
                <a className="gif-list-link" href={gif.url}>
                  <img
                    className="gif-list-img"
                    src={gif.images.original.url}
                    alt={gif.id}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ gifs }) {
  return { gifs };
}

export default connect(mapStateToProps)(GifList);
