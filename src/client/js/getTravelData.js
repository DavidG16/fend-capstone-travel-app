import { getCityData } from "./getCityData"
import { getWeatherData } from "./getWeatherData"
import { getPicture } from "./getPicture";
import { updateUI } from "./updateUI";

   async function getTavel (where) {
    const username = process.env.USERNAME;
    const weatherbitKey = process.env.weatherbit_key;
    const key = process.env.pixabay_key;
    await getCityData(username, where).then((data) =>{ 

        getWeatherData(data.lng, data.lat, weatherbitKey, data.country).then((weatherData) => {
            return weatherData

        }).then((data) => {
            getPicture(where, key, data).then( (data) => {
                updateUI(data)
            }) 
        })

    })


    

   }

   export {
    getTavel
   }
