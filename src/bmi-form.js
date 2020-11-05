import React, {Component} from 'react';
import { Button, Form  } from 'react-bootstrap';
import {connect} from 'react-redux';

class BMIForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      height: '',
      weight: ''
    };

    this.handleName = this.handleName.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validForm = this.validForm.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleHeight(event) {
    this.setState({ height: event.target.value });
  }

  handleWeight(event) {
    this.setState({ weight: event.target.value });
  }

  validForm() {
    const { name, weight, height } = this.state;
    return (!!name && !!weight && !!height);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {history} = this.props;
    
    if (this.validForm()) {
      const { name, weight, height } = this.state;
      const {dispatch} = this.props;
      dispatch({
        type: 'ADD_BMI',
        payload: { name, weight, height }
      });
      history.push("/");
    } else {
      alert('Invalid Form');
    }

    this.setState({ name: '', height: '', weight: '' });
  }

  render() {
    const {name, height, weight} = this.state;
    return (
      <div>
        <Form inline id="bmi-form">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={this.handleName} placeholder="Enter Name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Weight(kgs)</Form.Label>
            <Form.Control type="string" type="number" value={weight} onChange={this.handleWeight} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Height(cms)</Form.Label>
            <Form.Control type="string" onChange={this.handleHeight} value={height} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}> 
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { allBMIs: state.allBMIs }
}

const mapDispatchToProps = dispatch => {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(BMIForm);