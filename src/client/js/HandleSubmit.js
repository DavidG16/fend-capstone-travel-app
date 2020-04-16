import {getTavel} from "./getTravelData";
import { handleDates } from "./handleDates"



function addHandleSubmit (e) {
    e.preventDefault()
    const where = document.getElementById("where").value


    // if (where=='' || when=='') {
    //     alert('Please make sure you have add a Where and When')
    // }
    
    getTavel(where)
    // const dates = handleDates()
    // console.log(dates)
    


}

export  {
    addHandleSubmit
}


