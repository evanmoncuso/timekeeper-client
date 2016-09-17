import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// ---- components ----
const Home = require('./home.jsx');
const Job = require('./createJob.jsx');
const PunchCard = require('./punchCard.jsx');
const CreateInvoice = require('./createInvoice.jsx');
const Invoice = require('./invoice.jsx');
const punchNotification = require('./punchNotification.jsx');

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
          <Route path="/confirmation" component={punchNotification}></Route>
        </Route>
      </Router>
    </div>
  )
}

App.propTypes = {
  dispatchGetAllJobs: React.PropTypes.func,
};

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
