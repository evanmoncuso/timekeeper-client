import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="options_container for_options">
      <Link to="/job">
        <div className="option job">Create a new job</div>
      </Link>
      <Link to="/punchcard">
        <div className="option punch">Clock in or out</div>
      </Link>
      <Link to="/invoice_setup">
        <div className="option invoice">Make an invoice</div>
      </Link>
    </div>
  );
}

module.exports = Home;
