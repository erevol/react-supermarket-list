import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Modal from './Modal';
import RowItem from './RowItem';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      items: [
        { id: 0, description: "Beer" },
        { id: 1, description: "Cofee" },
        { id: 2, description: "More Beer" }
      ],
      nextId: 3
    }

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addItem(description) {
    let items = this.state.items.slice();
    let nextId = this.state.nextId + 1;
    items.push({ id: this.state.nextId, description });
    this.setState({
      items,
      nextId
    })
  }

  removeItem(id) {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  }

  handleClick() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="container">
        <Header title="Supermarket List" />
        <div className="flex-container">
          <div className="container">
            {this.state.items.map(item =>
              <RowItem
                description={item.description}
                id={item.id}
                key={item.id}
              />
            )}
          </div>
        </div>
        <div className="flex-container">
          <button onClick={this.handleClick} className="add-btn" type="submit">Add item</button>
        </div>
        <div>
          {this.state.showModal ?
            <Modal
              description=""
              handleCancel={this.handleClick}
              handleAdd={this.addItem}
            />
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
