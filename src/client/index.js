import "./styles/styles.scss";
import { addHandleSubmit } from "./js/HandleSubmit";
import { getCityData } from "./js/getCityData";
import { getWeatherData } from "./js/getWeatherData";
import { handleDates} from "./js/handleDates"

document.getElementById("add-trip").addEventListener('click', addHandleSubmit)

export {
    addHandleSubmit,
    getCityData,
    getWeatherData,
    handleDates

}