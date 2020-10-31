import React, {Component} from 'react';

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

  handleSubmit(event) {
    event.preventDefault();
    const {name, weight, height} = this.state;
    const {updateTable} = this.props;
    updateTable({'name': name, 'weight': weight, 'height': height});
    this.setState({ name: '', height: '', weight: '' })
  }

  render() {
    const {name, height, weight} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={this.handleName} />
        </label>
        <label>
          Height:
          <input type="number" value={height} onChange={this.handleHeight} />
        </label>
        <label>
          Weight:
          <input type="number" value={weight} onChange={this.handleWeight} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BMIForm;