import React, { Component } from 'react';

class ItemsCount extends Component {
    render() {
        return (
            this.props.itemsCount ?
                <div className="app-subtitle">{this.props.itemsCount} ITEMS</div>
            : null
        );
    }
}

export default ItemsCount;