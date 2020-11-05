import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

class BMIElement extends Component {
  constructor(props) {
    super(props);
    
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete() {
    const { dispatch } = this.props;
    const { id } = this.props.details;
    dispatch({
      type: 'REMOVE_BMI',
      payload: { id }
    });
  }

  handleEdit() {
    const { history, details } = this.props;
    history.push({
      pathname: '/form',
      state: {details}
    });
  }

  render() {
    const {name, height, weight} = this.props.details;
    return (
      <tr>
        <td>{name}</td>
        <td>{weight}</td>
        <td>{height}</td>
        <td><Button onClick={this.handleEdit}>Edit</Button></td>
        <td><Button onClick={this.handleDelete}>Delete</Button></td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return { allBMIs: state.allBMIs }
}

const mapDispatchToProps = dispatch => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(BMIElement);