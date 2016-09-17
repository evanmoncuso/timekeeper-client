import React from 'react';
import { connect } from 'react-redux';

const Job = ({ job, selectedJob, clickable, chooseJob }) => {
  let activeClass = 'job_listing';
  if (selectedJob && job.id === selectedJob.id && clickable) {
    activeClass = 'job_listing active';
  }
  return (
    <div className={activeClass} onClick={() => {
        if (clickable) {
          if (activeClass === 'job_listing active') {
            chooseJob(null);
          } else {
            chooseJob(job);
          }
        }
      }}>
      <h3>{job.title}</h3>
      <p>
        <span className="label">hourly rate: </span>
        <span className="data">${job.hourlyRate}</span>
      </p>
      <p>
        <span className="label">tax rate: </span>
        <span className="data">{(job.taxRate * 100).toFixed(2)}%</span>
      </p>
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    selectedJob: state.selectedJob,
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    chooseJob: (job) => {
      dispatch({
        type: 'CHOOSE JOB',
        job: job,
      })
    }
  }
)

module.exports = connect(mapStateToProps, mapDispatchToProps)(Job);
