const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();

const apiRouter = require('./routes/apiRouter.js');

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('app listening on port 3000');
})
