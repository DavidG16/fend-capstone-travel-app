import { getCityData } from "./getCityData"
import { getWeatherData } from "./getWeatherData"
import { getPicture } from "./getPicture";
import { updateUI } from "./updateUI";
import {postData} from "./postData";
import {getTravelList} from "./getTravelList";


   async function getTavel (where) {
    const username = process.env.USERNAME;
    const weatherbitKey = process.env.weatherbit_key;
    const key = process.env.pixabay_key;
    await getCityData(username, where).then((data) =>{ 

        getWeatherData(data.lng, data.lat, weatherbitKey, data.country, data.countryCode).then((weatherData) => {
            return weatherData

        }).then((data) => {
            getPicture(where, key, data).then( (data) => {
               
                postData('http://localhost:3000/add', {
                    picture : data.picture,
                    query : data.query,
                    avgTemp : data.avgTemp,
                    maxTemp : data.maxTemp,
                    minTemp : data.minTemp,
                    relativeH : data.relativeH,
                    country : data.country,
                    countryCode : data.countryCode,
                    countDown  : data.countDown,
                    endDate : data.endDate
                }).then( () => {
                    getTravelList('http://localhost:3000/list' ).then( (data => {
                        updateUI(data)
                    }))

                })
            }) 
        })

    })


    

   }

   export {
    getTavel
   }
