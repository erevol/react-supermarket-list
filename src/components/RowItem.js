import React, { Component } from 'react';

class RowItem extends Component {
  render() {
    return (
      <div className="card-panel">
        <div className="card-label">This is a card</div>
        <span className="card-icon"><i className="far fa-trash-alt"></i></span>
      </div>
    );
  }
}

export default RowItem;