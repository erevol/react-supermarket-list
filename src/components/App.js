import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Modal from './Modal';
import RowItem from './RowItem';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }
  handleClick = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  render() {
    return (
      <div className="container">
        <Header title="Supermarket List" />
        <div className="flex-container">
          <RowItem />
        </div>
        <div className="flex-container">
          <button onClick={this.handleClick} className="add-btn" type="submit">Add item</button>
        </div>
        <div>
          {this.state.showModal ?
            <Modal
              handleCancel={this.handleClick}
              handleAdd={this.handleClick}
            />
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
