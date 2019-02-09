import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.description
    };

    this.handleChange = this.handleChange.bind(this);
    this.onEscKeyPressed = this.onEscKeyPressed.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.onEscKeyPressed, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.onEscKeyPressed, false);
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  onEscKeyPressed(e){
    if(e.keyCode === 27) {
      this.props.handleCancel();
    }
  }

  render() {
    return (
      <div className="modal">
        <div className="modal_inner">
          <h1 className="app-title">Add item</h1>
          <div className="modal-container">
            {/* <div classname="modal-input"> */}
            <input autoFocus onChange={this.handleChange} type="text" value={this.state.value} />
            {/* </div> */}
            <div className="modal-btn-container">
              <button onClick={this.props.handleCancel} className="modal-btn-cancel" type="submit">Cancel</button>
              <button onClick={() => this.props.handleAdd(this.state.value)} className="modal-btn-add" disabled={!this.state.value} type="submit">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;