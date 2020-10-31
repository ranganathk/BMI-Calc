import React, { Component } from 'react';
import BMIForm from './bmi-form';
import BMITable from './bmi-table';

class BMICalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBMIs: [{
        "name": "ranga",
        "weight": "100",
        "height": "175"
      }]
    };
    // this.handleName = this.handleName.bind(this);

    this.updateTable = this.updateTable.bind(this);
  }

  updateTable(value) {
    console.log('jbajndjnjmkn');
    console.log(value);
    this.setState(state => {
      const newList = [...state.allBMIs, value];
      return {
        allBMIs: newList
      };
    });
  }

  render() {
    const {allBMIs} = this.state;
    return (
      <div>
        <BMIForm updateTable={this.updateTable} />
        <BMITable allBMIs={allBMIs} />
      </div>
    );
  }
}

export default BMICalculator;