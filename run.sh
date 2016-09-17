#!/bin/bash

# create secrets.js file for db connection information
touch secrets.js

# install node dependencies
npm install

# start the node server to server up the static files
npm start
