import moment from 'moment'

function updateUI (data) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    // Create html markup for trip info section
    let templates = ''
    for (let i=0; i<data.length; i++ ){

       

        let where = capitalize(data[i].query)
        let img = data[i].picture
        console.log(img)
        let avgTemp = data[i].avgTemp
        let maxTemp = data[i].maxTemp
        let minTemp = data[i].minTemp
        let relativeH = data[i].relativeH
        let country = data[i].country
        let currName = data[i].currencyName
        let currSymbol = data[i].currencySymbol

        let countDown = data[i].countDown
        let departure = moment(data[i].departure).format('l')
        
        let card = `
        
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
                        <p>Your trip is in ${countDown}.</p>
                        <p> The average temperature is ${Math.round(avgTemp)} ºC</p>
                        <p class="light">High: ${Math.round(maxTemp)} ºC </p>
                        <p class="light">Low: ${Math.round(minTemp)} ºC</p>
                        <p class="light"> Relative Humidity: ${Math.round(relativeH)}% <p>
                        <br>
                        <p>Country info</p>
                        <p class="light">Currency Name: ${currName} </p>
                        <p class="light"> Currency Symbol: ${currSymbol}</p>

                    </div>
            </div>
        </div>
        
        `
        templates += card;
        

        }
        // document.getElementById("user-input").classList.add("hide")
        document.getElementById("trip-card").innerHTML = templates


}

export {
    updateUI
}