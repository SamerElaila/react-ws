import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 });
  }

  handleDecrement() {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <input
          type='text'
          placeholder='counter value'
          value={this.state.value}
        />
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
