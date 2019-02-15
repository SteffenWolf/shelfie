require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    app.listen(4000, () => {
        console.log(`Ready on port 4000`)
    })
})

app.use(bodyParser.json)

app.get('/api/product', ctrl.getAll);

app.get('/api/inventory/:id', ctrl.getProduct)

