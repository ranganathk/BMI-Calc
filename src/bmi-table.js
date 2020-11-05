import React, { Component } from 'react';
import BMIElement from './bmi-element';
import { Table } from 'react-bootstrap';
import {connect} from 'react-redux';

const BMITable = (props) => {
  const { allBMIs } = props;
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

const mapStateToProps = state => {
  return { allBMIs: state.allBMIs };
}

export default connect(mapStateToProps)(BMITable);


 