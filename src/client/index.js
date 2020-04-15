import "./styles/styles.scss";
//import planelogo from "./media/planelogo.png"
import { addHandleSubmit } from "./js/HandleSubmit";
import { getCityData } from "./js/getCityData";

document.getElementById("add-trip").addEventListener('click', addHandleSubmit)

export {
    addHandleSubmit,
    getCityData

}