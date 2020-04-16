const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
app = express()

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))

  app.use(express.static('dist'))

  app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})


module.exports = app