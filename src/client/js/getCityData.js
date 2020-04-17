import axios from 'axios';

   // http://api.geonames.org/searchJSON?q=miami&username=username

 async function getCityData(username, city) {
    const url=  "http://api.geonames.org/searchJSON?q=",
    completeURL = `${url}${city}&username=${username}`
    const data = {};

   // fetch data
    try {
        await axios.get(completeURL).then((response) => {

            data.lng = response.data.geonames[0].lng
            data.lat = response.data.geonames[0].lat
            data.country = response.data.geonames[0].countryName
            data.countryCode = response.data.geonames[0].countryCode
            // console.log(response.data.geonames[0])
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

