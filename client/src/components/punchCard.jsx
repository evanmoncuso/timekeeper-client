import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// ---- components ----
const AllJobs = require('./allJobs.jsx');

import { submitPunch } from '../actions/punchActions.js';

const PunchCard = ({ selectedJob }) => {
  let summary;
  return (
    <div className="section_container for_punchcard">
      <Link to="/">
        <div className="back btn">back</div>
      </Link>
      <div className="punch_card form">
        <h2>Clock In or Out</h2>
        <AllJobs clickable={true}/>
        <form onSubmit={(e) => {
            e.preventDefault();
            if (selectedJob) {
              let punchData = {
                jobName: selectedJob.title,
                jobId: selectedJob.id,
                summary: summary.value,
              }
              submitPunch(punchData);
              summary.value = '';
            }
          }}
        >
          <div className="full_input">
            <label>Summary of work completed (optional)</label>
            <textarea
              maxLength="250"
              type="text"
              ref={(text) => { summary = text; }}>
            </textarea>
            <p className="limit">limit 250 characters</p>
            <p className="limit">please submit a work summary when punching out from a job.</p>
          </div>
          <button type="submit">punch</button>
        </form>
      </div>
    </div>
  )
}

PunchCard.Proptypes = {
  invoiceData: React.PropTypes.object,
}

const mapStateToProps = (state) => (
  {
    selectedJob: state.selectedJob,
  }
)

module.exports = connect(mapStateToProps)(PunchCard);
