import React, { Component } from 'react';

import TextInput from './TextInput';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ value: this.state.value + 1 });
  //   }, 5000);
  // }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 });
  }

  handleDecrement() {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    console.log(this.state.value);

    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <TextInput count={this.state.value} />
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
