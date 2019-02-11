import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.description
        };

        this.handleChange = this.handleChange.bind(this);
        this.onEscKeyPressed = this.onEscKeyPressed.bind(this);
        this.onEnterKeyPressed = this.onEnterKeyPressed.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.onEscKeyPressed, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onEscKeyPressed, false);
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    onEscKeyPressed(e) {
        if (e.keyCode === 27) {
            this.props.handleCancel();
        }
    }

    onEnterKeyPressed = (e) => {
        if (e.which === 13) {
            this.props.handleAdd(this.state.value);
        }
    }

    handleAdd(description) {
        if (description.length > 0) {
            this.props.handleAdd(description);
            this.setState({ value: '' });
        }
    }

    render() {
        return (
            <div className="modal">
                <div className="modal_inner">
                    <h1 className="app-title">Add item</h1>
                    <div className="modal-container">
                        <input autoFocus onKeyPress={this.onEnterKeyPressed} onChange={this.handleChange} type="text" value={this.state.value} />
                        <div className="modal-btn-container">
                            <button onClick={this.props.handleCancel} className="modal-btn-cancel" type="submit">Cancel</button>
                            <button onClick={() => this.handleAdd(this.state.value)} className="modal-btn-add" disabled={!this.state.value} type="submit">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;