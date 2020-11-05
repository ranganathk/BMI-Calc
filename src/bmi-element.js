import React, { Component } from 'react';

class BMIElement extends Component {
  constructor(props) {
    super(props);
    // this.handleName = this.handleName.bind(this);
  }

  render() {
    const {name, height, weight} = this.props.details;
    return (
      <tr>
        <td>{name}</td>
        <td>{weight}</td>
        <td>{height}</td>
      </tr>
    );
  }
}

export default BMIElement;