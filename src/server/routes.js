const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

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

const travelData = [];

// post and store trip info from client
app.post('/add', function (req, res){
  let data  = {}
  data.picture = req.body.picture
  data.query = req.body.query
  data.avgTemp = req.body.avgTemp
  data.maxTemp = req.body.maxTemp
  data.minTemp = req.body.minTemp
  data.relativeH = req.body.relativeH
  data.country = req.body.country
  data.countryCode = req.body.countryCode
  data.countDown  = req.body.countDown
  data.endDate = req.body.endDate

  
  countryDataAPI(data.countryCode).then( (response) => {
    data.currencySymbol = response.symbol
    data.currencyName = response.name
    console.log(data)

    travelData.push(data);

    res.send(
      {
        messsage: "add travel data successfully.",
        success: true

  })



})
})
// send travel list to cient
app.get("/list", function (req, res){
  res.send(travelData)
})

const countryDataAPI = async (countryCode) => {
  url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`
  const response = await fetch(url);
  let result = {};
  const currencies = {}
  try {
    result = await response.json();
    currencies.name= result.currencies[0].name,
    currencies.symbol = result.currencies[0].symbol

} catch (error) {
    console.log('error:', error);
};

return currencies



} 


module.exports = app