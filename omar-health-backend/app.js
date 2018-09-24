'use strict'

let express = require('express')
let app = express()
let cors = require('cors')
var mongoose = require('mongoose')
let compression = require('compression')
let Bluebird = require('bluebird')
let bodyParser = require('body-parser')
let config = require('./config')
let api = require('./api')

// Connect to mongo
mongoose.Promise = Bluebird
if (!mongoose.connection.db) mongoose.connect(config.get('DB_URI'))
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', console.error.bind(console, 'connected to mongodb'))

app.use(cors())

app.use(bodyParser.json())


app.use(compression())

app.use('/api', api)

module.exports = app
