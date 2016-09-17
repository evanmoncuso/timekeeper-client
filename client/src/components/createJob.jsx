import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'

const AllJobs = require('./allJobs.jsx');

const { createNewJob } = require('../actions/jobsActions.js');

const paTaxRate = 0.0307;

const CreateJob = ({ dispatchCreateNewJob }) => {
  let title;
  let hourlyRate;
  let taxRate;

  return (
    <div className="for_create">
      <Link to="/">
        <div className="back btn">back</div>
      </Link>
      <div className="create_job form">
        <h2>create a new job</h2>
        <form onSubmit={(e) => {
            e.preventDefault();

            let newJob = {
              title: title.value,
              hourlyRate: hourlyRate.value,
              taxRate: taxRate.value || paTaxRate,
            }

            dispatchCreateNewJob(newJob);

            title.value = '';
            hourlyRate.value = '';
            taxRate.value = '';
          }}>
          <div className="full_input">
            <label>Job title</label>
            <input
              type="text"
              required
              ref={(text) => { title = text; }}>
            </input>
          </div>
          <div className="full_input">
            <label>Hourly Rate ($)</label>
            <input
              type="text"
              required
              ref={(rate) => { hourlyRate = rate; }}>
            </input>
          </div>
          <div className="full_input">
            <label>Tax rate (enter as decimal value)</label>
            <input
              type="text"
              placeholder="3.07%"
              ref={(rate) => { taxRate = rate; }}>
            </input>
          </div>
          <button type="submit">create</button>
        </form>
        <AllJobs clickable={false} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => (
  {

  }
)

const mapDispatchToProps = (dispatch) => (
  {
    dispatchCreateNewJob: (newJob) => dispatch(createNewJob(newJob))
  }
)

module.exports = connect(null, mapDispatchToProps)(CreateJob);
