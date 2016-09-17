const Sequelize = require('sequelize');
const s = require('../../secrets.js');


const db = new Sequelize(s.db, s.user, s.password, {
  host: s.host,
  port: s.port,
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
