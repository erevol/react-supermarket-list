import React, { Component } from 'react';

class ItemsCount extends Component {
  render() {
    return (
      <div className="app-subtitle">{this.props.itemsCount} ITEMS</div>
    );
  }
}

export default ItemsCount;