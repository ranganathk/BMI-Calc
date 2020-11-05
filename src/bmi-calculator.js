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

const BMICalculator = (props) => {
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
          <Route path="/" component={BMITable} />
        </Switch>
      </div>
    </Router>
  );
}

export default BMICalculator;