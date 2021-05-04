import fetchOrderId from "../controllers/form/_fetchOrderId.js";

// Function which uppercases the first letter of a string
function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Define RegEx
const regexNames = /^[a-zA-Z ,.'-]+$/;
const regexAddress = /([0-9]{1,3}(([,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç']+)*)/;
const regexCity = /((([,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç']+)*)/;
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// If succeed RegEx validation, the post ajax request can execute 
function createOrderValidationNumber() {
    // Define an array with required details to validate the form
    const fields = [
        {
            datakey: "firstname",
            regex: regexNames
        },
        {
            datakey: "lastname",
            regex: regexNames
        },
        {
            datakey: "email",
            regex: regexEmail
        },
        {
            datakey: "city",
            regex: regexCity
        },
        {
            datakey: "address",
            regex: regexAddress
        },
    ]

    // Regex validation form
    var form_Ok = true;

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const value = document.getElementById(field.datakey).value;
        if (value == "" || field.regex.exec(value) == null) {
            form_Ok = false
            const missingDetails = document.getElementById(`miss${ucFirst(field.datakey)}`);
            missingDetails.textContent = `${ucFirst(field.datakey)} is missing or unvalid`;
            missingDetails.style.color = "red";
        }
    }
    if (form_Ok) {
        fetchOrderId();
    }
};

export default createOrderValidationNumber;
