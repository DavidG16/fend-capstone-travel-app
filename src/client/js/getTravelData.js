import { getCityData } from "./getCityData"

   async function getTavel (where) {
    const username = process.env.USERNAME;
    await getCityData(username, where).then((data) =>{
        console.log(data)
    
    }).then(

        console.log("Finish Travel")
    )
    

   }

   export {
    getTavel
   }
