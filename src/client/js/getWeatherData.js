import axios from 'axios';
import { handleDates } from "./handleDates"

// https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY

 async function getWeatherData(lng, lat, key, country, countryCode) {
    const dates = handleDates()
    const startDate = dates.departure
    const endDate = dates.endDate
    const url=  "https://api.weatherbit.io/v2.0/history/daily?",
    completeURL = `${url}&lat=${lat}&lon=${lng}&key=${key}&start_date=${startDate}&end_date=${endDate}`
    console.log(countryCode)
    const data = {};

    // fetch data
    try {
        await axios.get(completeURL).then((response) => {
            data.avgTemp = response.data.data[0].temp
            data.maxTemp = response.data.data[0].max_temp
            data.minTemp = response.data.data[0].min_temp
            data.reletiveH = response.data.data[0].rh
            data.country = country
            data.countryCode = countryCode
            data.countDown = dates.countDown
            data.endDate = dates.endDate 
            data.departure = dates.departure 
          });
          return data;

    }
    catch(error) {
        console.log("This error", error);
      }
}

export   {
    getWeatherData
}