import React, { Component } from 'react';
import ItemsCount from './ItemsCount';

class Header extends Component {
  render() {
    return (
      <div className="app-title">
        <h1>{this.props.title}</h1>
        <ItemsCount />
      </div>
    );
  }
}

export default Header;