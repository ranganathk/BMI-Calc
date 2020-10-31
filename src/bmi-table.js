import React, { Component } from 'react';
import BMIElement from './bmi-element'; 

class BMITable extends Component {
  constructor(props) {
    super(props);
    // this.handleName = this.handleName.bind(this);
  }

  render() {
    const {allBMIs} = this.props;
    return (
      <div>
        {allBMIs.map((bmi, index) => {
          return <BMIElement key={bmi.name} details={bmi}/>
        })}
      </div>
    );
  }
}

export default BMITable;