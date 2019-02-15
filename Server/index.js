require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(bodyParser.json)


app.listen(4000, () => console.log(`Ready on port 4000`))