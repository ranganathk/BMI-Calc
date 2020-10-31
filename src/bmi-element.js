import React, { Component } from 'react';

class BMIElement extends Component {
  constructor(props) {
    super(props);
    // this.handleName = this.handleName.bind(this);
  }

  render() {
    const {name, height, weight} = this.props.details;
    return (
      <div> 
        Name: {name}
        Weight: {weight}
        Height: {height}
      </div>
    );
  }
}

export default BMIElement;