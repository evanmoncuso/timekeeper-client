"use strict"

const express = require('express');
const bp = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
let port = process.env.PORT || 3000;

const apiRouter = require('./routes/apiRouter.js');

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRouter);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log('app listening on port', port);
})
