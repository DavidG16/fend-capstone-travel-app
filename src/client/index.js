import "./styles/styles.scss";
//import planelogo from "./media/planelogo.png"
import addHandleSubmit from "./js/HandleSubmit";
import getCityData from "./js/getData";


document.getElementById("add-trip").addEventListener('click', addHandleSubmit.addHandleSubmit)

export {
    addHandleSubmit,
    getCityData

}