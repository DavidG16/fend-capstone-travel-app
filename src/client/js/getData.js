import axios from 'axios';

 async function getCityData(username, city) {
    const url=  "http://api.geonames.org/searchJSON?q=",
    completeURL = `${url}${city}&username=${username}`
    console.log(completeURL)

    return await axios.get(completeURL).then(response => {
        if (response.geonames[0] != 0) {
          return response.geonames[0];
        } else {
          return { error: 'no results' };
        }
      });



}

export default  {
    getCityData
}

