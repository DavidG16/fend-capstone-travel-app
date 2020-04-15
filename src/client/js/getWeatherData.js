import axios from 'axios';

// https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY

 async function getWeatherData(lng, lat, key) {
    const url=  "https://api.weatherbit.io/v2.0/current?",
    completeURL = `${url}&lat=${lat}&lon=${lng}&key=${key}`
    console.log(completeURL)
    const data = {};

    try {
        await axios.get(completeURL).then((response) => {
            data.temp = response.data.data[0].temp
            data.weather = response.data.data[0].weather
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