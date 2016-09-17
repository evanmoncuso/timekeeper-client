# Time Track and Invoicing app

A simple app to create jobs, track time working on that job, and create billing invoices for any job over a given range of time

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

API calls are made with fetch

## API
The API consists of two primary endpoints. All responses are in JSON format

### /api/timeEntry

#### get
a GET request to this endpoint responds with all closed punches within given date range

EXAMPLE

GET request: /api/timeEntry?api/timeEntry?jobId=1&start=UTC_START_TIME&end=UTC_END_TIME

Response:

`[
  {
    "id": 1,
    "jobName": "sheep maven",
    "jobId": 3,
    "open": false,
    "totalMinutes": 9,
    "taskSummary": "Herded sheep across the great northern lands",
    "createdAt": "2016-09-17T19:40:28.133Z",
    "updatedAt": "2016-09-17T19:50:16.002Z"
  }
]`


#### post
a POST request to this endpoint acts as making a punch on the timeclock. If there is an open punch associated with that job, it will close that punch. Otherwise, it will open a new timecard punch field.

EXAMPLE

POST request: /api/timeEntry

`body {
  "jobId": 2,
  "jobName": "lawyer",
  "summary": "lawyered!"
}`

Response:

`{
  "status": false,
  "timeDiff": 7,
  "response": {
    "id": 2,
    "jobName": "sheep maven",
    "jobId": 3,
    "open": false,
    "totalMinutes": 7,
    "taskSummary": "Herded across the eastern plains this time. Did not find a port.",
    "createdAt": "2016-09-17T19:51:26.995Z",
    "updatedAt": "2016-09-17T19:58:41.965Z"
  }
}`

### /api/jobs

#### get -> /:all
a GET request to the all endpoint yields an array of all jobs in the database

EXAMPLE

GET request: /api/jobs/all

Response:

`[
  {
    "id": 1,
    "title": "medic",
    "hourlyRate": 24,
    "taxRate": 0.0307
  },
`
...

#### get -> /:jobName
A GET request to a specific jobname gets back the information for that job

GET request: /api/jobs/all

Response:

`{
  "id": 2,
  "title": "farmer",
  "hourlyRate": 20,
  "taxRate": 0.0307
}
`

#### post
A POST request to the /jobs endpoint creates a new job posting

POST request: /api/jobs/:jobname

`body {
  title: title.value,
  hourlyRate: hourlyRate.value,
  taxRate: taxRate.value || paTaxRate,
}`

Response:
List of all jobs in array form

`[
  {
    "id": 1,
    "title": "medic",
    "hourlyRate": 24,
    "taxRate": 0.0307
  },
` 
...
