import React, { Component } from 'react';

class RowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.description
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete (id) {
    this.props.handleDelete(id);
  }

  render() {
    return (
      <div className="card-panel">
        <div className="card-label">{this.props.description}</div>
        <span onClick={() => this.handleDelete(this.props.id)} className="card-icon"><i className="far fa-trash-alt"></i></span>
      </div>
    );
  }
}

export default RowItem;