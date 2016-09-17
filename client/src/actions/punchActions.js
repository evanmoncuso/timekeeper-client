import { browserHistory } from 'react-router';

const baseUrl = 'http://localhost:3000/api/';

const optimisticGetInvoiceInfo = (data, hourlyRate, taxRate, title, start, end, minutes, subtotal, tax, total) => (
  {
    type: 'INVOICE DATA',
    title,
    hourlyRate,
    taxRate,
    punchData: data,
    start,
    end,
    minutes,
    subtotal,
    tax,
    total,
  }
);

const optimisticNotification = (title, status, length) => (
  {
    type: 'PUNCH NOTIFICATION',
    title,
    status,
  }
)

module.exports = {
    submitPunch: (punchData) => (
      (dispatch) => {
        fetch(`${baseUrl}timeEntry/`, {
          method: 'POST',
          body: JSON.stringify(punchData),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          dispatch(optimisticNotification(response.response.jobName, response.status, response.timeDiff));
          browserHistory.push('/confirmation');
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    ),
  getJobData: (start, end, jobId, hourlyRate, taxRate, title) => (
    (dispatch) => {
      fetch(`${baseUrl}timeEntry/?jobId=${jobId}&start=${start}&end=${end}`)
      .then((response) => response.json())
      .then((response) => {

        let totalMinutes = response.reduce((total, indiv) => {
          total += indiv.totalMinutes;
          return total;
        }, 0);

        let subtotal = (totalMinutes * (hourlyRate / 60));
        let tax = subtotal * taxRate;
        let total = subtotal + tax;

        subtotal = subtotal.toFixed(2);
        tax = tax.toFixed(2);
        total = total.toFixed(2);

        dispatch(optimisticGetInvoiceInfo(response, hourlyRate, taxRate, title, start, end, totalMinutes, subtotal, tax, total));

        browserHistory.push('/invoice');
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  ),
}
