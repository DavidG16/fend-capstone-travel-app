import moment from 'moment'

function handleDates () {
    const when = document.getElementById("when").value
    const futureDate = moment(when).add(1,'day')
    // console.log(futureDate)
    const dates = {}
    dates.countDown = moment(when).fromNow()
    dates.endDate = moment(futureDate).format('YYYY-MM-DD')

    dates.departure = moment(when).format('YYYY-MM-DD')

  

    return dates

}

export {
    handleDates
}