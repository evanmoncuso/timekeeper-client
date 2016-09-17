"use strict"

const router = require('express').Router();

const timeEntryRouter = require('./timeEntryRouter.js');
const jobRouter = require('./jobRouter.js');

router.get('/', (req, res) => {
  res.send('this is the base of the api route. Nothing really happens here... But welcome!');
});

router.use('/timeEntry', timeEntryRouter);
router.use('/jobs', jobRouter);

module.exports = router;
