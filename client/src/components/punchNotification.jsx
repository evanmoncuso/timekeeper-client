import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

const Notification = ({ title, status, length, resetNotification }) => {
  setTimeout(() => {
    resetNotification()
    browserHistory.push('/');
  }, 5000);

  let inOrOut = status ? 'in' : 'out';
  return (
    <div className="notification">
      <h2>You've clocked {inOrOut} as: {title}</h2>
      <p className="notification_minutes">{length ? length + ' minutes' : ''}</p>
      <Link to="/">
        <div className="close btn">close</div>
      </Link>
    </div>
  );
}

Notification.PropTypes = {
  length: React.PropTypes.string,
  status: React.PropTypes.bool,
  title: React.PropTypes.number,
  resetNotification: React.PropTypes.func,
}

const mapStateToProps = (state) => (
  {
    length: state.notification.length,
    status: state.notification.status,
    title: state.notification.title,
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    resetNotification: () => {
      dispatch({
        type: 'PUNCH NOTIFICATION',
        length: null,
        status: null,
        title: null,
      })
    },
  }
)

module.exports = connect(mapStateToProps, mapDispatchToProps)(Notification);
