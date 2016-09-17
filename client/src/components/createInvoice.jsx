import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getJobData } from '../actions/punchActions.js'

// ---- components
const AllJobs = require('./allJobs.jsx');

const Invoice = ({ selectedJob, dispatchJobData }) => {
  let end;
  let start;
  return (
    <div className="section_container for_invoice">
      <Link to="/">
        <div className="back btn">back</div>
      </Link>
      <div className="create_job form">
        <h2>run an invoice</h2>
          <AllJobs clickable={true}/>
          <form onSubmit={(e) => {
              e.preventDefault();
              if (selectedJob) {
                start = new Date(start);
                end = new Date(end);
                start = start.toISOString();
                end = end.toISOString();
                console.log(start, end);
                dispatchJobData(start, end, selectedJob.id, selectedJob.hourlyRate, selectedJob.taxRate, selectedJob.title);
              }
            }}>
          <div className="full_input">
            <label>Time period start</label>
            <input
              required
              type="date"
              onChange={(date) => { start = date.target.value; }}>
            </input>
          </div>
          <div className="full_input">
            <label>Time period end</label>
            <input
              required
              type="date"
              onChange={(date) => { end = date.target.value; }}>
            </input>
          </div>
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}

Invoice.propTypes = {
  selectedJob: React.PropTypes.object,
  dispatchJobData: React.PropTypes.func,
};

const mapStateToProps = (state) => (
  {
    selectedJob: state.selectedJob,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    dispatchJobData: (start, end, jobId, hourlyRate, taxRate, title) => dispatch(getJobData(start, end, jobId, hourlyRate, taxRate, title)),
  }
)

module.exports = connect(mapStateToProps, mapDispatchToProps)(Invoice);
