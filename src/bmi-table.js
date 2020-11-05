import React, { Component } from 'react';
import BMIElement from './bmi-element';
import { Table } from 'react-bootstrap';

class BMITable extends Component {
  constructor(props) {
    super(props);
    // this.handleName = this.handleName.bind(this);
  }

  render() {
    const {allBMIs} = this.props;
    return (
      <div>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            {allBMIs.map((bmi, index) => {
              return <BMIElement key={bmi.name} details={bmi} />
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default BMITable;


 