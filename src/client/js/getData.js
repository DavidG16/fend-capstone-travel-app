import axios from 'axios';

 async function getCityData(username, city) {
    const url=  "http://api.geonames.org/searchJSON?q=",
    completeURL = `${url}${city}&username=${username}`
    console.log(completeURL)
    let data;

    await axios.get(completeURL).then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        data = response;
      });
      return data;

}

export default  {
    getCityData
}

