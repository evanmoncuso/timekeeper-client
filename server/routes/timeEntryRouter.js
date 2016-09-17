"use strict"

const router = require('express').Router();
const db = require('../config/db.js');
const Punch = require('../models/punchModel.js');


router.get('/', (req, res) => {
  // times should be in zulu time format
  let start = req.query.start || 0;
  let end = req.query.end || '2200-12-31 19:00:00.000 -05:00';
  Punch.findAll({
    where: {
      $and: {
        jobId: req.query.jobId,
        createdAt: {
          $gt: start,
        },
        updatedAt: {
          $lt: end,
        }
      }
    }
  })
  .then((response) => {
    //TODO
    // add a query to get the job summary
    if(response) {
      res.send(response);
    } else {
      res.send('');
    }
  })
});

router.post('/', (req, res) => {
  // create a punch for the given job
  Punch.findOne({
    where: {
      $and: {
        jobId: req.body.jobId,
        open: true,
      },
    }
  })
  .then((results) => {
      if(results) {
        results.update({
          open: false,
          taskSummary: req.body.summary,
        })
        .then(function(response) {
          let timeDiff = response.updatedAt - response.createdAt;
          timeDiff = Math.floor(timeDiff / (60 * 1000));
          results.update({
            totalMinutes: timeDiff,
          });
          res.send(JSON.stringify({status: false, timeDiff, response}))
        })
      } else {
        Punch.create({
          jobName: req.body.jobName,
          jobId: req.body.jobId,
          open: true,
          totalMinutes: null,
          taskSummary: '',
        })
        .then((response) => {
          res.send(JSON.stringify({status: true, response}))
        })
      }
    })
});

module.exports = router;
