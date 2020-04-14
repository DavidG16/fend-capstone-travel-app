const app = require('./app')
const bodyParser = require('body-parser')
const cors = require('cors')

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))


app.post('/addtrip', function(req, res){
    let data = {};

    data.location = req.body.location
    data.latitud = req.body.latitud
    data.longitud = req.body.longitud
    data.departure = req.body.departure
    res.sendFile(data)




})