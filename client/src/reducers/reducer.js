import { combineReducers } from 'redux';

const jobs = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE ALL JOBS':
      return action.jobs;
    default:
      return state;
  }
}

const selectedJob = (state = null, action) => {
  switch (action.type) {
    case 'CHOOSE JOB':
      return action.job;
    default:
      return state;
  }
}

const notification = (state = {}, action) => {
  switch (action.type) {
    case 'PUNCH NOTIFICATION':
      return {
        title: action.title,
        status: action.status,
        length: action.length,
      }
    default:
      return state;
  }
}

const invoiceData = (state = [], action) => {
  switch (action.type) {
    case 'INVOICE DATA':
      return {
        title: action.title,
        hourlyRate: action.hourlyRate,
        taxRate: action.taxRate,
        punchData: action.punchData,
        start: action.start,
        end: action.end,
        minutes: action.minutes,
        subtotal: action.subtotal,
        tax: action.tax,
        total: action.total,
      }
    default:
      return state;
  }
}

module.exports = combineReducers({
  invoiceData,
  jobs,
  notification,
  selectedJob,
});
