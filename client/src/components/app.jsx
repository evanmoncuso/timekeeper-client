import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

// ---- components ----
const Job = require('./createJob.jsx');
const PunchCard = require('./punchCard.jsx');
const CreateInvoice = require('./createInvoice.jsx');
const Invoice = require('./invoice.jsx');

const { getAllJobs } = require('../actions/jobsActions.js');

const App = ({ dispatchGetAllJobs }) => {
  dispatchGetAllJobs();
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={Home}></IndexRoute>
          <Route path="/job" component={Job}></Route>
          <Route path="/punchcard" component={PunchCard}></Route>
          <Route path="/invoice_setup" component={CreateInvoice}></Route>
          <Route path="/invoice" component={Invoice}></Route>
        </Route>
      </Router>
    </div>
  )
}

const Home = () => {
  return (
    <div className="options_container for_options">
      <Link to="/job">
        <div className="option job">Create a new job</div>
      </Link>
      <Link to="/punchcard">
        <div className="option punch">Clock in or out</div>
      </Link>
      <Link to="/invoice_setup">
        <div className="option invoice">Make an invoice</div>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => (
  {
    dispatchGetAllJobs: () => dispatch(getAllJobs()),
  }
)

module.exports = connect(null, mapDispatchToProps)(App);


// <img src="css/spritesheet.png" alt="sprites" />
//
// <img src="css/spritesheet.png" alt="sprites" />
//
// <img src="css/spritesheet.png" alt="sprites" />
