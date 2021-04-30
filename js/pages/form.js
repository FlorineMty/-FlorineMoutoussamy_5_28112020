import fetchOrderId from "../controllers/form/_fetchOrderId.js";

// Define selectors
const missFirstname = document.getElementById("missFirstname");
const missLastname = document.getElementById("missLastname");
const missAddress = document.getElementById("missAddress");
const missCity = document.getElementById("missCity");
const missEmail = document.getElementById("missEmail");

// Define RegEx
const regexNames = /^[a-zA-Z ,.'-]+$/;
const regexAddress = /([0-9]{1,3}(([,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç']+)*)/;
const regexCity = /((([,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç']+)*)/;
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// If succeed RegEx validation, the post ajax request can execute 
function createOrderValidationNumber() {

    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;

    // Regex validation form
    var form_Ok = true;

    if (lastName == "" || regexNames.exec(lastName) == null) {
        form_Ok = false
        missLastname.textContent = "Lastname is missing or unvalid";
        missLastname.style.color = "red";
    }
    if (firstName == "" || regexNames.exec(firstName) == null) {
        form_Ok = false
        missFirstname.textContent = "Firstname is missing or unvalid";
        missFirstname.style.color = "red";
    }
    if (address == "" || regexAddress.exec(address) == null) {
        form_Ok = false
        missAddress.textContent = "Address is missing or unvalid";
        missAddress.style.color = "red";
    }
    if (city == "" || regexCity.exec(address) == null) {
        form_Ok = false
        missCity.textContent = "City is missing or unvalid";
        missCity.style.color = "red";
    }
    if (email == "" || regexEmail.exec(email) == null) {
        form_Ok = false
        missEmail.textContent = "Firstname is missing or unvalid";
        missEmail.style.color = "red";
    } else {
        // Post ajax request 
        fetchOrderId();
    };
};

export default createOrderValidationNumber;
