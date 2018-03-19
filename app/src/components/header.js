import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <h1 className="header-content">
          Giffy{' '}
          <img
            className="header-img"
            src="https://i.giphy.com/media/NmFo265EJBzY4/source.gif"
            alt="Giffy Tube"
          />{' '}
          Tube
        </h1>
      </div>
    );
  }
}

export default Header;
