import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className="container">
            <h1 className="app-title">Add item</h1>
            <div className="modal-btn-container">
              <button onClick={this.props.handleCancel} className="modal-btn-cancel" type="submit">Cancel</button>
              <button onClick={this.props.handleAdd} className="modal-btn-add" type="submit">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;