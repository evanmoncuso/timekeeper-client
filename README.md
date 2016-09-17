# Time Track and Invoicing app

A simple app to create jobs, track time working on that job, and create billing invoices for any job over a given range of time, mark, audio, video {

## Creator
Evan Moncuso

## Setup / Startup
either run the run.sh script in the root of the directory or

`npm install`

`npm start`

Additionally, a secrets.js file will need to be created in the root of the directory (I have the created by the run.sh file creating it, as well)

Copy in the database info provided into secrets.js access into the postgres db hoksted on heroku

then navigate to `localhost:3000` in your browser

## Deployment
Deployed on heroku to make looking through the app a little easier if node/npm are not installed
http://hire-timekeeper.herokuapp.com/

## Requirements
npm (for installing dependencies)
NodeJS

## Stack
React / Redux
NodeJS / Express
Postgres / Sequelize
