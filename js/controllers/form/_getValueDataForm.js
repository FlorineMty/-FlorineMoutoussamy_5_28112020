
import getIdStored from "./_getIdStored.js";

//Get value fields entered by user
function getValueDataForm() {

    let products = getIdStored();

    let contact = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        city: document.getElementById("city").value,
        address: document.getElementById("address").value,
    };

    let object = {
        contact,
        products, 
    };

    let objectRequest = JSON.stringify(object);

    return objectRequest
}

export default getValueDataForm;