import axios from 'axios';

// https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY

 async function getCityData(lng, lat, key) {
    const url=  "https://api.weatherbit.io/v2.0/current",
    completeURL = `${url}&lat=${lat}&lon=${lng}&${key}`
    console.log(completeURL)
    const data = {};

    try {
        await axios.get(completeURL).then((response) => {
            data.lng = response.data.geonames[0].lng
            data.lat = response.data.geonames[0].lat
          });
          return data;
    }
    catch(error) {
        console.log("This error", error);
      }
}

export   {
    getCityData
}