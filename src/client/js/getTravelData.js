import { getCityData } from "./getCityData"
import { getWeatherData } from "./getWeatherData"

   async function getTavel (where) {
    const username = process.env.USERNAME;
    const weatherbitKey = process.env.weatherbit_key;
    await getCityData(username, where).then((data) =>{ 

        getWeatherData(data.lng, data.lat, weatherbitKey).then((weatherData) => {
            console.log(weatherData)

        })

    })
    

   }

   export {
    getTavel
   }
