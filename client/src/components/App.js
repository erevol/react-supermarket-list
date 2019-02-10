import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Modal from './Modal';
import RowItem from './RowItem';
import api from '../api/api';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      items: [],
      nextId: 0
    }

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty('items')) {
      this.hydrateStateWithLocalStorage();
    }
  }

  hydrateStateWithLocalStorage() {
    let items = localStorage.getItem('items');

    try {
      items = JSON.parse(items);
      this.setState({ items });
    } catch (e) {
      this.setState({ items });
    }
  }

  addItem(description) {
    let nextId = this.state.nextId + 1;
    let items = [...this.state.items, {
      id: nextId,
      description
    }];
    this.setState({
      items,
      nextId,
      showModal: !this.state.showModal
    });
    localStorage.setItem("items", JSON.stringify(items));
  }

  removeItem(id) {
    const updatedItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: updatedItems
    });
    localStorage.setItem("items", JSON.stringify(updatedItems));
  }

  handleClick() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="container">
        <Header title="Supermarket List" itemsCount={this.state.items.length} />
        <div className="flex-container">
          <div className="container">
            {this.state.items.map(item =>
              <RowItem
                description={item.description}
                id={item.id}
                key={item.description}
                handleDelete={this.removeItem}
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
