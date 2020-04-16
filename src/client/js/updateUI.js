import moment from 'moment'

function updateUI (data) {
    console.log('data on updateUI')
    console.log(data)

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

    document.getElementById("user-input").classList.add("hide")

    let where = capitalize(data.query)
    let img = data.picture
    let avgTemp = data.avgTemp
    let maxTemp = data.maxTemp
    let minTemp = data.minTemp
    let relativeH = data.relativeH
    let country = data.country
    let countDown = data.countDown
    let departure = moment(data.departure).format('l')



    const card = `
    
    <div class="container">
        <div class="trip-image">
            <img src="${img}">
        </div>
        <div class="trip-info">
                <div class="trip-title">
                        <p class='title'> My trip to ${where}, ${country}</p>
                        <p class='title'>Departing: ${departure}</p>
                </div>
                <div class="trip-description">
                    <p>Your trip is ${countDown}.</p>
                    <p> The average temperature is ${Math.round(avgTemp)}ºC</p>
                    <p class="light">High: ${Math.round(maxTemp)}ºC </p>
                    <p class="light">Low: ${Math.round(minTemp)}ºC</p>
                    <p class="light"> Reletive Humidity: ${Math.round(relativeH)}% <p>

                </div>
        </div>
    </div>
    
    `
    document.getElementById("trip-card").innerHTML = card

}

export {
    updateUI
}