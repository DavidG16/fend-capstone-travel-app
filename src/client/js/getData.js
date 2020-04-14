import axios from 'axios';

 async function getCityData(username, city) {
     const url=  "http://api.geonames.org/searchJSON?q=",
    completeURL = `${url}${city}&username=${username}`
    try {
        result = await axios.get(completeURL)
        return result
    }

    catch (err)
    {
        console.log("Error getting the city coordinates")
    }
 

}

export default  {
    getCityData
}

