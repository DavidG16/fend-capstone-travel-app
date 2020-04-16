import axios from 'axios';
//pixabay example = https://pixabay.com/api/?key=....&q=yellow+flowers&image_type=photo

 async function getPicture(query, key, other_data) {
    const url=  "https://pixabay.com/api/?key="
    const completeURL = `${url}${key}&q=${query}&image_type=photo`
    console.log(query)
    const data = {};

    try {
        await axios.get(completeURL).then((response) => {
            if (response.data.totalHits >0){
                data.picture = response.data.hits[0].webformatURL
                data.query = query
                data.avgTemp = other_data.avgTemp
                data.maxTemp = other_data.maxTemp
                data.minTemp = other_data.minTemp
                data.relativeH = other_data.reletiveH
                data.country = other_data.country
                data.countDown = other_data.countDown
                data.futureDate = other_data.endDate 
                data.departure = other_data.departure 


            
               
            } else{
                console.log('No pictures')
                console.log(response)
            }

          });
          console.log(data)
          return data;
    }
    catch(error) {
        console.log("This error", error);
      }
}

export   {
    getPicture
}