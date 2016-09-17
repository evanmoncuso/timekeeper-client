const Sequelize = require('sequelize');
const s = require('../../secrets.js');

const db = new Sequelize(process.env.DB || s.db, process.env.DBUSER || s.user, process.env.PASSWORD || s.password, {
  host: process.env.HOST || s.host,
  port: process.env.PORT || s.port,
  timezone: '-05:00',
  dialectOptions: {
    ssl: true
  },
  dialect: 'postgres',
});

db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = db;
