import "./styles/styles.scss";
//import planelogo from "./media/planelogo.png"
import addHandle from "./js/HandleSubmit";
import getCityData from "./js/getData";


document.getElementById("add-trip").addEventListener('click', addHandle.addHandleSubmit)

export {
    addHandle,
    getCityData

}