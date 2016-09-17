import React from 'react';
import { connect } from 'react-redux';

// ---- components ----
const Job = require('./indivJob.jsx');

const AllJobs = ({ jobs, clickable }) => {

  return (
    <div className="section_container all_jobs">
      {jobs.map((job) => <Job key={job.id} job={job} clickable={clickable} /> )}
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    jobs: state.jobs,
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    chooseJob: (job) => {
      dispatch({
        type: 'CHOOSE JOB',
        job,
      })
    }
  }
)

module.exports = connect(mapStateToProps)(AllJobs);
