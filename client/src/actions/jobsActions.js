const baseUrl = 'http://localhost:3000/api/';

const optimisticGetAllJobs = (jobs) => (
  {
    type: 'UPDATE ALL JOBS',
    jobs: jobs,
  }
)

module.exports = {
  getAllJobs: () => (
    (dispatch) => {
      fetch(`${baseUrl}jobs/all`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(optimisticGetAllJobs(response));
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  ),
  createNewJob: (job) => {
    return (dispatch) => {
      fetch(`${baseUrl}jobs/${job.title}`, {
        method: 'POST',
        body: JSON.stringify(job),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((response) => {
        dispatch(optimisticGetAllJobs(response));
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  },

}
