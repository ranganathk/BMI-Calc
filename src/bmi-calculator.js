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
    // this.handleName = this.handleName.bind(this);

    this.updateTable = this.updateTable.bind(this);
  }

  updateTable(value) {
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

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/form">
              <BMIForm updateTable={this.updateTable} />
            </Route>
            <Route path="/faqs">
              <FAQs />
            </Route>
            <Route path="/">
              <BMITable allBMIs={allBMIs} />
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BMICalculator;