import axios from 'axios';

 async function getCityData(username, city) {
    const url=  "http://api.geonames.org/searchJSON?q=",
    completeURL = `${url}${city}&username=${username}`
    console.log(completeURL)
 

    try {
        let data = await axios.get(completeURL).then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            data = response;
          });
          return data;

    }
    catch(error) {
        console.log("error", error);
        // appropriately handle the error
      }

 

}

export default  {
    getCityData
}

