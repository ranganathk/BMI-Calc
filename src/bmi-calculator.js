import React, { Component } from 'react';
import BMIForm from './bmi-form';
import BMITable from './bmi-table';
import FAQs from './faqs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
  }

  render() {
    const {allBMIs} = this.state;
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/form" component={BMIForm} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/" render={(allBMIs) => <BMITable {...allBMIs} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BMICalculator;