import React, { Component } from 'react';
import BMIElement from './bmi-element';
import { Table } from 'react-bootstrap';
import {connect} from 'react-redux';

const BMITable = (props) => {
  const { allBMIs, history } = props;
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
            return <BMIElement key={bmi.id} details={bmi} history={history} />
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


 