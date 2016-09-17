"use strict"

const router = require('express').Router();
const db = require('../config/db.js');
const Job = require('../models/jobModel.js');

router.get('/', (req, res) => {
  res.send('job api endpoint');
  //find job with name of...
});

router.get('/all', (req, res) => {
  Job.findAll({
    attributes: ['id', 'title', 'hourlyRate', 'taxRate'],
  })
  .then((results) => {
    res.send(JSON.stringify(results));
  })
  .catch((err) => console.log(err))
})

router.get('/:jobName', (req, res) => {
  Job.findOne({
    attributes: ['id', 'title', 'hourlyRate', 'taxRate'],
    where: {
      title: req.params.jobName,
    },
  })
  .then((results) => {
    res.send(JSON.stringify(results));
  })
  .catch((err) => console.log(err))
});

router.post('/:jobName', (req, res) => {

  Job.create({
    title: req.body.title,
    hourlyRate: req.body.hourlyRate,
    taxRate: req.body.taxRate,
  })
  .then(() => {
    Job.findAll({
      attributes: ['id', 'title', 'hourlyRate', 'taxRate'],
    })
    .then((results) => {
      res.send(JSON.stringify(results));
    })
  })
});

// TODO add a delete job route

module.exports = router;
