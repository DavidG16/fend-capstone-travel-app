import {getTavel} from "./getTravelData";

function addHandleSubmit (e) {
    e.preventDefault()
    const where = document.getElementById("where").value
    const when = document.getElementById("when").value

    // if (where=='' || when=='') {
    //     alert('Please make sure you have add a Where and When')
    // }
    console.log(`To ${where} departing ${when}`)
    getTavel(where)

}

export  {
    addHandleSubmit
}


