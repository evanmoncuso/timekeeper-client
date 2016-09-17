"use strict"

const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Job = db.define('job', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hourlyRate: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  taxRate: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

Job.sync()

module.exports = Job;
