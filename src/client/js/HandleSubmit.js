import getCityData from "./getData"
import axios from 'axios';


function addHandleSubmit (e) {
    e.preventDefault()
    const where = document.getElementById("where").value
    const when = document.getElementById("when").value

    // if (where=='' || when=='') {
    //     alert('Please make sure you have add a Where and When')
    // }
    console.log(`To ${where} departing ${when}`)
   // http://api.geonames.org/searchJSON?q=miami&username=davidg16

    const city = getCityData("davidg16", where)




}








export default {
    addHandleSubmit
}


