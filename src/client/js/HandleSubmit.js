import {getTavel} from "./getTravelData";



function addHandleSubmit (e) {
    e.preventDefault()
    const where = document.getElementById("where").value
    const when = document.getElementById("when").value

// Make sure all user input is provided
    if (where=='' || when=='') {
        alert('Please make sure you have add a Where and When')
        return   
    }
 
    getTavel(where)
    // const dates = handleDates()
    // console.log(dates)
    


}

export  {
    addHandleSubmit
}


