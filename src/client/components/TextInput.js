import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  componentWillReceiveProps() {
    console.log(this.props);
  }

  render() {
    return (
      <input type="text" placeholder="counter value" value={this.props.count} />
    );
  }
}

TextInput.propTypes = {
  count: PropTypes.number
};

export default TextInput;
