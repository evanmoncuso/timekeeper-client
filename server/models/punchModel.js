const Sequelize = require('sequelize');
const db = require('../config/db.js');
const Job = require('./jobModel.js');

const Punch = db.define('punch', {
  jobName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  jobId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  open: {
    type: Sequelize.BOOLEAN, // true is open, false is closed
    allowNull: false,
  },
  totalMinutes: {
    type: Sequelize.FLOAT,
  },
  taskSummary: {
    type: Sequelize.STRING,
  },
});

Punch.belongsTo(Job, {foreignKey: 'jobId', targetKey: 'id'});

Punch.sync()

module.exports = Punch;
