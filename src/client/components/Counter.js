import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { increment as incrementAction } from '../actions/incrementCounterAction';
import TextInput from './TextInput';

class Counter extends Component {
  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.props.increment();
  }

  handleDecrement() {}

  render() {
    console.log(this.props);

    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <TextInput count={this.props.count} />
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.incrementCounter.count
});

const mapDispatchToProps = {
  increment: incrementAction
};

Counter.propTypes = {
  increment: PropTypes.func,
  count: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
