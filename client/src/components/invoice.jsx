import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// ---- components ----

const Invoice = ({ invoiceData }) => {
  return (
    <div className="section_container">
      <Link to="/">
        <div className="back btn">back</div>
      </Link>
      <div className="display_invoice">
        <h2>{invoiceData.title}</h2>
        <div className="date_range">
          <p>start: {invoiceData.start.slice(5, 10) + ' ' + invoiceData.start.slice(0,4)}</p>
          <p>end: {invoiceData.end.slice(5, 10) + ' ' + invoiceData.end.slice(0,4)}</p>
        </div>
        <div className="itemized">
          {invoiceData.punchData.map((item) => {
            return (<div className="indiv_punch_item" key={item.id}>
              <span className="data_point">date: {item.createdAt.slice(5,10)}</span>
              <span className="data_point">{item.taskSummary}</span>
              <span className="data_point">${(item.totalMinutes * (invoiceData.hourlyRate/60)).toFixed(2)}</span>
            </div>)
          })}
        </div>
        <div className="final_payment">
          <div className="subtotal">
            {invoiceData.hourlyRate} per hour x {invoiceData.minutes} minutes = {invoiceData.subtotal}
          </div>
          <div className="tax">
            {(invoiceData.taxRate * 100).toFixed(2)} % x {invoiceData.subtotal} = {invoiceData.total}
          </div>
          <div className="total">
            <span className="total_label">total</span> = {invoiceData.total}
          </div>
        </div>
      </div>
    </div>
  )
}

Invoice.propTypes = {
  invoiceData: React.PropTypes.object,
};

const mapStateToProps = (state) => (
  {
    invoiceData: state.invoiceData,
  }
)

module.exports = connect(mapStateToProps)(Invoice);
